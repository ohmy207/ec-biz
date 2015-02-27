(function() {
    "use strict";
    var $ = window.jQuery;

    var EditableCaret, InputCaret, Mirror, Utils, discoveryIframeOf, methods, oDocument, oFrame, oWindow, pluginName, setContextBy;

    pluginName = 'caret';

    EditableCaret = (function() {
        function EditableCaret($inputor) {
            this.$inputor = $inputor;
            this.domInputor = this.$inputor[0];
        }

        EditableCaret.prototype.setPos = function(pos) {
            return this.domInputor;
        };

        EditableCaret.prototype.getIEPosition = function() {
            return this.getPosition();
        };

        EditableCaret.prototype.getPosition = function() {
            var inputor_offset, offset;
            offset = this.getOffset();
            inputor_offset = this.$inputor.offset();
            offset.left -= inputor_offset.left;
            offset.top -= inputor_offset.top;
            return offset;
        };

        EditableCaret.prototype.getOldIEPos = function() {
            var preCaretTextRange, textRange;
            textRange = oDocument.selection.createRange();
            preCaretTextRange = oDocument.body.createTextRange();
            preCaretTextRange.moveToElementText(this.domInputor);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            return preCaretTextRange.text.length;
        };

        EditableCaret.prototype.getPos = function() {
            var clonedRange, pos, range;
            if (range = this.range()) {
                clonedRange = range.cloneRange();
                clonedRange.selectNodeContents(this.domInputor);
                clonedRange.setEnd(range.endContainer, range.endOffset);
                pos = clonedRange.toString().length;
                clonedRange.detach();
                return pos;
            } else if (oDocument.selection) {
                return this.getOldIEPos();
            }
        };

        EditableCaret.prototype.getOldIEOffset = function() {
            var range, rect;
            range = oDocument.selection.createRange().duplicate();
            range.moveStart("character", -1);
            rect = range.getBoundingClientRect();
            return {
                height: rect.bottom - rect.top,
                left: rect.left,
                top: rect.top
            };
        };

        EditableCaret.prototype.getOffset = function(pos) {
            var clonedRange, offset, range, rect, shadowCaret;
            if (oWindow.getSelection && (range = this.range())) {
                if (range.endOffset - 1 > 0 && range.endContainer === !this.domInputor) {
                    clonedRange = range.cloneRange();
                    clonedRange.setStart(range.endContainer, range.endOffset - 1);
                    clonedRange.setEnd(range.endContainer, range.endOffset);
                    rect = clonedRange.getBoundingClientRect();
                    offset = {
                        height: rect.height,
                        left: rect.left + rect.width,
                        top: rect.top
                    };
                    clonedRange.detach();
                }
                if (!offset || (offset != null ? offset.height : undefined) === 0) {
                    clonedRange = range.cloneRange();
                    shadowCaret = $(oDocument.createTextNode("|"));
                    clonedRange.insertNode(shadowCaret[0]);
                    clonedRange.selectNode(shadowCaret[0]);
                    rect = clonedRange.getBoundingClientRect();
                    offset = {
                        height: rect.height,
                        left: rect.left,
                        top: rect.top
                    };
                    shadowCaret.remove();
                    clonedRange.detach();
                }
            } else if (oDocument.selection) {
                offset = this.getOldIEOffset();
            }
            if (offset) {
                offset.top += $(oWindow).scrollTop();
                offset.left += $(oWindow).scrollLeft();
            }
            return offset;
        };

        EditableCaret.prototype.range = function() {
            var sel;
            if (!oWindow.getSelection) {
                return;
            }
            sel = oWindow.getSelection();
            if (sel.rangeCount > 0) {
                return sel.getRangeAt(0);
            } else {
                return null;
            }
        };

        return EditableCaret;

    })();

    InputCaret = (function() {
        function InputCaret($inputor) {
            this.$inputor = $inputor;
            this.domInputor = this.$inputor[0];
        }

        InputCaret.prototype.getIEPos = function() {
            var endRange, inputor, len, normalizedValue, pos, range, textInputRange;
            inputor = this.domInputor;
            range = oDocument.selection.createRange();
            pos = 0;
            if (range && range.parentElement() === inputor) {
                normalizedValue = inputor.value.replace(/\r\n/g, "\n");
                len = normalizedValue.length;
                textInputRange = inputor.createTextRange();
                textInputRange.moveToBookmark(range.getBookmark());
                endRange = inputor.createTextRange();
                endRange.collapse(false);
                if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                    pos = len;
                } else {
                    pos = -textInputRange.moveStart("character", -len);
                }
            }
            return pos;
        };

        InputCaret.prototype.getPos = function() {
            if (oDocument.selection) {
                return this.getIEPos();
            } else {
                return this.domInputor.selectionStart;
            }
        };

        InputCaret.prototype.setPos = function(pos) {
            var inputor, range;
            inputor = this.domInputor;
            if (oDocument.selection) {
                range = inputor.createTextRange();
                range.move("character", pos);
                range.select();
            } else if (inputor.setSelectionRange) {
                inputor.setSelectionRange(pos, pos);
            }
            return inputor;
        };

        InputCaret.prototype.getIEOffset = function(pos) {
            var h, textRange, x, y;
            textRange = this.domInputor.createTextRange();
            pos || (pos = this.getPos());
            textRange.move('character', pos);
            x = textRange.boundingLeft;
            y = textRange.boundingTop;
            h = textRange.boundingHeight;
            return {
                left: x,
                top: y,
                height: h
            };
        };

        InputCaret.prototype.getOffset = function(pos) {
            var $inputor, offset, position;
            $inputor = this.$inputor;
            if (oDocument.selection) {
                offset = this.getIEOffset(pos);
                offset.top += $(oWindow).scrollTop() + $inputor.scrollTop();
                offset.left += $(oWindow).scrollLeft() + $inputor.scrollLeft();
                return offset;
            } else {
                offset = $inputor.offset();
                position = this.getPosition(pos);
                return offset = {
                    left: offset.left + position.left - $inputor.scrollLeft(),
                    top: offset.top + position.top - $inputor.scrollTop(),
                    height: position.height
                };
            }
        };

        InputCaret.prototype.getPosition = function(pos) {
            var $inputor, at_rect, end_range, format, html, mirror, start_range;
            $inputor = this.$inputor;
            format = function(value) {
                value = value.replace(/<|>|`|"|&/g, '?').replace(/\r\n|\r|\n/g, "<br/>");
                if (/firefox/i.test(navigator.userAgent)) {
                    value = value.replace(/\s/g, '&nbsp;');
                }
                return value;
            };
            if (pos === void 0) {
                pos = this.getPos();
            }
            start_range = $inputor.val().slice(0, pos);
            end_range = $inputor.val().slice(pos);
            html = "<span style='position: relative; display: inline;'>" + format(start_range) + "</span>";
            html += "<span id='caret' style='position: relative; display: inline;'>|</span>";
            html += "<span style='position: relative; display: inline;'>" + format(end_range) + "</span>";
            mirror = new Mirror($inputor);
            return at_rect = mirror.create(html).rect();
        };

        InputCaret.prototype.getIEPosition = function(pos) {
            var h, inputorOffset, offset, x, y;
            offset = this.getIEOffset(pos);
            inputorOffset = this.$inputor.offset();
            x = offset.left - inputorOffset.left;
            y = offset.top - inputorOffset.top;
            h = offset.height;
            return {
                left: x,
                top: y,
                height: h
            };
        };

        return InputCaret;

    })();

    Mirror = (function() {
        Mirror.prototype.css_attr = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontWeight", "height", "letterSpacing", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "outlineWidth", "overflow", "overflowX", "overflowY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "textAlign", "textOverflow", "textTransform", "whiteSpace", "wordBreak", "wordWrap"];

        function Mirror($inputor) {
            this.$inputor = $inputor;
        }

        Mirror.prototype.mirrorCss = function() {
            var css,
                _this = this;
            css = {
                position: 'absolute',
                left: -9999,
                top: 0,
                zIndex: -20000
            };
            if (this.$inputor.prop('tagName') === 'TEXTAREA') {
                this.css_attr.push('width');
            }
            $.each(this.css_attr, function(i, p) {
                return css[p] = _this.$inputor.css(p);
            });
            return css;
        };

        Mirror.prototype.create = function(html) {
            this.$mirror = $('<div></div>');
            this.$mirror.css(this.mirrorCss());
            this.$mirror.html(html);
            this.$inputor.after(this.$mirror);
            return this;
        };

        Mirror.prototype.rect = function() {
            var $flag, pos, rect;
            $flag = this.$mirror.find("#caret");
            pos = $flag.position();
            rect = {
                left: pos.left,
                top: pos.top,
                height: $flag.height()
            };
            this.$mirror.remove();
            return rect;
        };

        return Mirror;

    })();

    Utils = {
        contentEditable: function($inputor) {
            return !!($inputor[0].contentEditable && $inputor[0].contentEditable === 'true');
        }
    };

    methods = {
        pos: function(pos) {
            if (pos || pos === 0) {
                return this.setPos(pos);
            } else {
                return this.getPos();
            }
        },
        position: function(pos) {
            if (oDocument.selection) {
                return this.getIEPosition(pos);
            } else {
                return this.getPosition(pos);
            }
        },
        offset: function(pos) {
            var offset;
            offset = this.getOffset(pos);
            return offset;
        }
    };

    oDocument = null;

    oWindow = null;

    oFrame = null;

    setContextBy = function(settings) {
        var iframe;
        if (iframe = settings != null ? settings.iframe : void 0) {
            oFrame = iframe;
            oWindow = iframe.contentWindow;
            return oDocument = iframe.contentDocument || oWindow.document;
        } else {
            oFrame = void 0;
            oWindow = window;
            return oDocument = document;
        }
    };

    discoveryIframeOf = function($dom) {
        var error;
        oDocument = $dom[0].ownerDocument;
        oWindow = oDocument.defaultView || oDocument.parentWindow;
        try {
            return oFrame = oWindow.frameElement;
        } catch (_error) {
            error = _error;
        }
    };

    $.fn.caret = function(method, value, settings) {
        var caret;
        if (methods[method]) {
            if ($.isPlainObject(value)) {
                setContextBy(value);
                value = void 0;
            } else {
                setContextBy(settings);
            }
            caret = Utils.contentEditable(this) ? new EditableCaret(this) : new InputCaret(this);
            return methods[method].apply(caret, [value]);
        } else {
            return $.error("Method " + method + " does not exist on jQuery.caret");
        }
    };

    $.fn.caret.EditableCaret = EditableCaret;

    $.fn.caret.InputCaret = InputCaret;

    $.fn.caret.Utils = Utils;

    $.fn.caret.apis = methods;

    var Api, App, Controller, DEFAULT_CALLBACKS, EditableController, KEY_CODE, Model, TextareaController, View,
        __slice = [].slice,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) {
            for (var key in parent) {
                if (__hasProp.call(parent, key)) child[key] = parent[key];
            }

            function ctor() {
                this.constructor = child;
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
        };

    App = (function() {
        function App(inputor) {
            this.currentFlag = null;
            this.controllers = {};
            this.aliasMaps = {};
            this.$inputor = $(inputor);
            this.setupRootElement();
            this.listen();
        }

        App.prototype.createContainer = function(doc) {
            var _ref;
            if ((_ref = this.$el) != null) {
                _ref.remove();
            }
            return $(doc.body).append(this.$el = $("<div class='atwho-container'></div>"));
        };

        App.prototype.setupRootElement = function(iframe, asRoot) {
            var error;
            if (asRoot == null) {
                asRoot = false;
            }
            if (iframe) {
                this.window = iframe.contentWindow;
                this.document = iframe.contentDocument || this.window.document;
                this.iframe = iframe;
            } else {
                this.document = this.$inputor[0].ownerDocument;
                this.window = this.document.defaultView || this.document.parentWindow;
                try {
                    this.iframe = this.window.frameElement;
                } catch (_error) {
                    error = _error;
                    this.iframe = null;
                    throw new Error("iframe auto-discovery is failed.\nPlease use `serIframe` to set the target iframe manually.");
                }
            }
            return this.createContainer((this.iframeAsRoot = asRoot) ? this.document : document);
        };

        App.prototype.controller = function(at) {
            var c, current, currentFlag, _ref;
            if (this.aliasMaps[at]) {
                current = this.controllers[this.aliasMaps[at]];
            } else {
                _ref = this.controllers;
                for (currentFlag in _ref) {
                    c = _ref[currentFlag];
                    if (currentFlag === at) {
                        current = c;
                        break;
                    }
                }
            }
            if (current) {
                return current;
            } else {
                return this.controllers[this.currentFlag];
            }
        };

        App.prototype.setContextFor = function(at) {
            this.currentFlag = at;
            return this;
        };

        App.prototype.reg = function(flag, setting) {
            var controller, _base;
            controller = (_base = this.controllers)[flag] || (_base[flag] = this.$inputor.is('[contentEditable]') ? new EditableController(this, flag) : new TextareaController(this, flag));
            if (setting.alias) {
                this.aliasMaps[setting.alias] = flag;
            }
            controller.init(setting);
            return this;
        };

        App.prototype.listen = function() {
            return this.$inputor.on('compositionstart', (function(_this) {
                return function(e) {
                    var _ref;
                    if ((_ref = _this.controller()) != null) {
                        _ref.view.hide();
                    }
                    return _this.isComposing = true;
                };
            })(this)).on('compositionend', (function(_this) {
                return function(e) {
                    return _this.isComposing = false;
                };
            })(this)).on('keyup.atwhoInner', (function(_this) {
                return function(e) {
                    return _this.onKeyup(e);
                };
            })(this)).on('keydown.atwhoInner', (function(_this) {
                return function(e) {
                    return _this.onKeydown(e);
                };
            })(this)).on('scroll.atwhoInner', (function(_this) {
                return function(e) {
                    var _ref;
                    return (_ref = _this.controller()) != null ? _ref.view.hide(e) : void 0;
                };
            })(this)).on('blur.atwhoInner', (function(_this) {
                return function(e) {
                    var c;
                    if (c = _this.controller()) {
                        return c.view.hide(e, c.getOpt("displayTimeout"));
                    }
                };
            })(this)).on('click.atwhoInner', (function(_this) {
                return function(e) {
                    return _this.dispatch(e);
                };
            })(this));
        };

        App.prototype.shutdown = function() {
            var c, _, _ref;
            _ref = this.controllers;
            for (_ in _ref) {
                c = _ref[_];
                c.destroy();
                delete this.controllers[_];
            }
            this.$inputor.off('.atwhoInner');
            return this.$el.remove();
        };

        App.prototype.dispatch = function(e) {
            return $.map(this.controllers, (function(_this) {
                return function(c) {
                    var delay;
                    if (delay = c.getOpt('delay')) {
                        clearTimeout(_this.delayedCallback);
                        return _this.delayedCallback = setTimeout(function() {
                            if (c.lookUp(e)) {
                                return _this.setContextFor(c.at);
                            }
                        }, delay);
                    } else {
                        if (c.lookUp(e)) {
                            return _this.setContextFor(c.at);
                        }
                    }
                };
            })(this));
        };

        App.prototype.onKeyup = function(e) {
            var _ref;
            switch (e.keyCode) {
                case KEY_CODE.ESC:
                    e.preventDefault();
                    if ((_ref = this.controller()) != null) {
                        _ref.view.hide();
                    }
                    break;
                case KEY_CODE.DOWN:
                case KEY_CODE.UP:
                case KEY_CODE.CTRL:
                    $.noop();
                    break;
                case KEY_CODE.P:
                case KEY_CODE.N:
                    if (!e.ctrlKey) {
                        this.dispatch(e);
                    }
                    break;
                default:
                    this.dispatch(e);
            }
        };

        App.prototype.onKeydown = function(e) {
            var view, _ref;
            view = (_ref = this.controller()) != null ? _ref.view : void 0;
            if (!(view && view.visible())) {
                return;
            }
            switch (e.keyCode) {
                case KEY_CODE.ESC:
                    e.preventDefault();
                    view.hide(e);
                    break;
                case KEY_CODE.UP:
                    e.preventDefault();
                    view.prev();
                    break;
                case KEY_CODE.DOWN:
                    e.preventDefault();
                    view.next();
                    break;
                case KEY_CODE.P:
                    if (!e.ctrlKey) {
                        return;
                    }
                    e.preventDefault();
                    view.prev();
                    break;
                case KEY_CODE.N:
                    if (!e.ctrlKey) {
                        return;
                    }
                    e.preventDefault();
                    view.next();
                    break;
                case KEY_CODE.TAB:
                case KEY_CODE.ENTER:
                case KEY_CODE.SPACE:
                    if (!view.visible()) {
                        return;
                    }
                    if (!this.controller().getOpt('spaceSelectsMatch') && e.keyCode === KEY_CODE.SPACE) {
                        return;
                    }
                    e.preventDefault();
                    view.choose(e);
                    break;
                default:
                    $.noop();
            }
        };

        return App;

    })();

    Controller = (function() {
        Controller.prototype.uid = function() {
            return (Math.random().toString(16) + "000000000").substr(2, 8) + (new Date().getTime());
        };

        function Controller(app, at) {
            this.app = app;
            this.at = at;
            this.$inputor = this.app.$inputor;
            this.id = this.$inputor[0].id || this.uid();
            this.setting = null;
            this.query = null;
            this.pos = 0;
            this.range = null;
            if ((this.$el = $("#atwho-ground-" + this.id, this.app.$el)).length === 0) {
                this.app.$el.append(this.$el = $("<div id='atwho-ground-" + this.id + "'></div>"));
            }
            this.model = new Model(this);
            this.view = new View(this);
        }

        Controller.prototype.init = function(setting) {
            this.setting = $.extend({}, this.setting || $.fn.atwho["default"], setting);
            this.view.init();
            return this.model.reload(this.setting.data);
        };

        Controller.prototype.destroy = function() {
            this.trigger('beforeDestroy');
            this.model.destroy();
            this.view.destroy();
            return this.$el.remove();
        };

        Controller.prototype.callDefault = function() {
            var args, error, funcName;
            funcName = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            try {
                return DEFAULT_CALLBACKS[funcName].apply(this, args);
            } catch (_error) {
                error = _error;
                return $.error("" + error + " Or maybe At.js doesn't have function " + funcName);
            }
        };

        Controller.prototype.trigger = function(name, data) {
            var alias, eventName;
            if (data == null) {
                data = [];
            }
            data.push(this);
            alias = this.getOpt('alias');
            eventName = alias ? "" + name + "-" + alias + ".atwho" : "" + name + ".atwho";
            return this.$inputor.trigger(eventName, data);
        };

        Controller.prototype.callbacks = function(funcName) {
            return this.getOpt("callbacks")[funcName] || DEFAULT_CALLBACKS[funcName];
        };

        Controller.prototype.getOpt = function(at, default_value) {
            var e;
            try {
                return this.setting[at];
            } catch (_error) {
                e = _error;
                return null;
            }
        };

        Controller.prototype.insertContentFor = function($li) {
            var data, tpl, type;

            type = $li.data('type');
            if (type == 'item') {
                tpl = this.getOpt('insertTpl');
                data = $.extend({}, $li.data('item-data'), {
                    'atwho-at': this.at
                });
                return this.callbacks("tplEval")(tpl, data);
            } else {
                return $li.text();
            }
        };

        Controller.prototype.renderView = function(data, type) {
            var searchKey;
            searchKey = this.getOpt("searchKey");
            data = this.callbacks("sorter").call(this, this.query.text, data.slice(0, 1001), searchKey);
            return this.view.render(data.slice(0, this.getOpt('limit')), type);
        };

        Controller.arrayToDefaultHash = function(data) {
            var item, _i, _len, _results;
            if (!$.isArray(data)) {
                return data;
            }
            _results = [];
            for (_i = 0, _len = data.length; _i < _len; _i++) {
                item = data[_i];
                if ($.isPlainObject(item)) {
                    _results.push(item);
                } else {
                    _results.push({
                        name: item
                    });
                }
            }
            return _results;
        };

        Controller.prototype.lookUp = function(e) {
            var query, _callback;
            if (!(query = this.catchQuery(e))) {
                return;
            }
            _callback = function(data, type) {
                if (data && data.length > 0) {
                    return this.renderView(this.constructor.arrayToDefaultHash(data), type);
                } else {
                    return this.view.hide();
                }
            };
            this.model.query(query.text, $.proxy(_callback, this));
            return query;
        };

        return Controller;

    })();

    TextareaController = (function(_super) {
        __extends(TextareaController, _super);

        function TextareaController() {
            return TextareaController.__super__.constructor.apply(this, arguments);
        }

        TextareaController.prototype.catchQuery = function() {
            var caretPos, content, end, query, start, subtext;
            content = this.$inputor.val();
            caretPos = this.$inputor.caret('pos', {
                iframe: this.app.iframe
            });
            subtext = content.slice(0, caretPos);
            query = this.callbacks("matcher").call(this, this.at, subtext, this.getOpt('startWithSpace'));
            if (typeof query === "string" && query.length <= this.getOpt('maxLen', 20)) {
                start = caretPos - query.length;
                end = start + query.length;
                this.pos = start;
                query = {
                    'text': query,
                    'headPos': start,
                    'endPos': end
                };
                this.trigger("matched", [this.at, query.text]);
            } else {
                query = null;
                this.view.hide();
            }
            return this.query = query;
        };

        TextareaController.prototype.rect = function() {
            var c, iframeOffset, scaleBottom;
            if (!(c = this.$inputor.caret('offset', this.pos - 1, {
                iframe: this.app.iframe
            }))) {
                return;
            }
            if (this.app.iframe && !this.app.iframeAsRoot) {
                iframeOffset = $(this.app.iframe).offset();
                c.left += iframeOffset.left;
                c.top += iframeOffset.top;
            }
            scaleBottom = this.app.document.selection ? 0 : 2;
            return {
                left: c.left,
                top: c.top,
                bottom: c.top + c.height + scaleBottom
            };
        };

        TextareaController.prototype.insert = function(content, $li) {
            var $inputor, source, startStr, suffix, text;
            $inputor = this.$inputor;
            source = $inputor.val();
            startStr = source.slice(0, Math.max(this.query.headPos - this.at.length, 0));
            suffix = (suffix = this.getOpt('suffix')) === "" ? suffix : suffix || " ";
            content += suffix;
            text = "" + startStr + content + (source.slice(this.query['endPos'] || 0));
            $inputor.val(text);
            $inputor.caret('pos', startStr.length + content.length, {
                iframe: this.app.iframe
            });
            if (!$inputor.is(':focus')) {
                $inputor.focus();
            }
            return $inputor.change();
        };

        return TextareaController;

    })(Controller);

    EditableController = (function(_super) {
        __extends(EditableController, _super);

        function EditableController() {
            return EditableController.__super__.constructor.apply(this, arguments);
        }

        EditableController.prototype._getRange = function() {
            var sel;
            sel = this.app.window.getSelection();
            if (sel.rangeCount > 0) {
                return sel.getRangeAt(0);
            }
        };

        EditableController.prototype._setRange = function(position, node, range) {
            if (range == null) {
                range = this._getRange();
            }
            if (!range) {
                return;
            }
            node = $(node)[0];
            if (position === 'after') {
                range.setEndAfter(node);
                range.setStartAfter(node);
            } else {
                range.setEndBefore(node);
                range.setStartBefore(node);
            }
            range.collapse(false);
            return this._clearRange(range);
        };

        EditableController.prototype._clearRange = function(range) {
            var sel;
            if (range == null) {
                range = this._getRange();
            }
            sel = this.app.window.getSelection();
            sel.removeAllRanges();
            return sel.addRange(range);
        };

        EditableController.prototype._movingEvent = function(e) {
            var _ref;
            return e.type === 'click' || ((_ref = e.which) === KEY_CODE.RIGHT || _ref === KEY_CODE.LEFT || _ref === KEY_CODE.UP || _ref === KEY_CODE.DOWN);
        };

        EditableController.prototype._unwrap = function(node) {
            var next;
            node = $(node).unwrap().get(0);
            if ((next = node.nextSibling) && next.nodeValue) {
                node.nodeValue += next.nodeValue;
                $(next).remove();
            }
            return node;
        };

        EditableController.prototype.catchQuery = function(e) {
            var $inserted, $query, index, inserted, lastNode, matched, offset, query, range, _range;
            if (this.app.isComposing) {
                return;
            }
            if (!(range = this._getRange())) {
                return;
            }
            if (e.which === KEY_CODE.ENTER) {
                ($query = $(range.startContainer).closest('.atwho-query')).contents().unwrap();
                if ($query.is(':empty')) {
                    $query.remove();
                }
                ($query = $(".atwho-query", this.app.document)).text($query.text()).contents().last().unwrap();
                this._clearRange();
                return;
            }
            if (/firefox/i.test(navigator.userAgent)) {
                if ($(range.startContainer).is(this.$inputor)) {
                    this._clearRange();
                    return;
                }
                if (e.which === KEY_CODE.BACKSPACE && range.startContainer.nodeType === document.ELEMENT_NODE && (offset = range.startOffset - 1) >= 0) {
                    _range = range.cloneRange();
                    _range.setStart(range.startContainer, offset);
                    if ($(_range.cloneContents()).contents().last().is('.atwho-inserted')) {
                        inserted = $(range.startContainer).contents().get(offset);
                        this._setRange("after", $(inserted).contents().last());
                    }
                } else if (e.which === KEY_CODE.LEFT && range.startContainer.nodeType === document.TEXT_NODE) {
                    $inserted = $(range.startContainer.previousSibling);
                    if ($inserted.is('.atwho-inserted') && range.startOffset === 0) {
                        this._setRange('after', $inserted.contents().last());
                    }
                }
            }
            $(range.startContainer).closest('.atwho-inserted').addClass('atwho-query').siblings().removeClass('atwho-query');
            if (($query = $(".atwho-query", this.app.document)).length > 0 && $query.is(':empty') && $query.text().length === 0) {
                $query.remove();
            }
            if (!this._movingEvent(e)) {
                $query.removeClass('atwho-inserted');
            }
            _range = range.cloneRange();
            _range.setStart(range.startContainer, 0);
            matched = this.callbacks("matcher").call(this, this.at, _range.toString(), this.getOpt('startWithSpace'));
            if ($query.length === 0 && typeof matched === 'string' && (index = range.startOffset - this.at.length - matched.length) >= 0) {
                range.setStart(range.startContainer, index);
                range.surroundContents(($query = $("<span class='atwho-query'/>", this.app.document))[0]);
                lastNode = $query.contents().last().get(0);
                if (/firefox/i.test(navigator.userAgent)) {
                    range.setStart(lastNode, lastNode.length);
                    range.setEnd(lastNode, lastNode.length);
                    this._clearRange(range);
                } else {
                    this._setRange('after', lastNode, range);
                }
            }
            if (typeof matched === 'string' && matched.length <= this.getOpt('maxLen', 20)) {
                query = {
                    text: matched,
                    el: $query
                };
                this.trigger("matched", [this.at, query.text]);
                return this.query = query;
            } else {
                this.view.hide();
                this.query = {
                    el: $query
                };
                if ($query.text().indexOf(this.at) >= 0) {
                    if (this._movingEvent(e) && $query.hasClass('atwho-inserted')) {
                        $query.removeClass('atwho-query');
                    } else if (false !== this.callbacks('afterMatchFailed').call(this, this.at, $query)) {
                        this._setRange("after", this._unwrap($query.text($query.text()).contents().first()));
                    }
                }
                return null;
            }
        };

        EditableController.prototype.rect = function() {
            var $iframe, iframeOffset, rect;
            rect = this.query.el.offset();
            if (this.app.iframe && !this.app.iframeAsRoot) {
                iframeOffset = ($iframe = $(this.app.iframe)).offset();
                rect.left += iframeOffset.left - this.$inputor.scrollLeft();
                rect.top += iframeOffset.top - this.$inputor.scrollTop();
            }
            rect.bottom = rect.top + this.query.el.height();
            return rect;
        };

        EditableController.prototype.insert = function(content, $li) {
            var range, suffix, suffixNode;
            suffix = (suffix = this.getOpt('suffix')) ? suffix : suffix || "\u00A0";
            this.query.el.removeClass('atwho-query').addClass('atwho-inserted').html(content);
            if (range = this._getRange()) {
                range.setEndAfter(this.query.el[0]);
                range.collapse(false);
                range.insertNode(suffixNode = this.app.document.createTextNode(suffix));
                this._setRange('after', suffixNode, range);
            }
            if (!this.$inputor.is(':focus')) {
                this.$inputor.focus();
            }
            return this.$inputor.change();
        };

        return EditableController;

    })(Controller);

    Model = (function() {
        function Model(context) {
            this.context = context;
            this.at = this.context.at;
            this.storage = this.context.$inputor;
        }

        Model.prototype.destroy = function() {
            return this.storage.data(this.at, null);
        };

        Model.prototype.saved = function() {
            return this.fetch() > 0;
        };

        Model.prototype.query = function(query, callback) {
            var data, searchKey, _remoteFilter;
            data = this.fetch();

            searchKey = this.context.getOpt("searchKey");
            data = this.context.callbacks('filter').call(this.context, query, data, searchKey) || [];

            _remoteFilter = this.context.callbacks('remoteFilter');
            if (data.length > 0 || (!_remoteFilter && data.length === 0)) {
                return callback(data);
            } else {
                return _remoteFilter.call(this.context, query, callback);
            }
        };

        Model.prototype.fetch = function() {
            return this.storage.data(this.at) || [];
        };

        Model.prototype.save = function(data) {
            return this.storage.data(this.at, this.context.callbacks("beforeSave").call(this.context, data || []));
        };

        Model.prototype.load = function(data) {
            if (!(this.saved() || !data)) {
                return this._load(data);
            }
        };

        Model.prototype.reload = function(data) {
            return this._load(data);
        };

        Model.prototype._load = function(data) {
            if (typeof data === "string") {
                return $.ajax(data, {
                    dataType: "json"
                }).done((function(_this) {
                    return function(data) {
                        return _this.save(data);
                    };
                })(this));
            } else {
                return this.save(data);
            }
        };

        return Model;

    })();

    View = (function() {
        function View(context) {
            this.context = context;
            this.$el = $("<div class='complate-at'><ul class='complate-at-ul'></ul></div>");
            this.timeoutID = null;
            this.context.$el.append(this.$el);
            this.bindEvent();
        }

        View.prototype.init = function() {
            var id;
            id = this.context.getOpt("alias") || this.context.at.charCodeAt(0);
            return this.$el.attr({
                'id': "at-view-" + id
            });
        };

        View.prototype.destroy = function() {
            return this.$el.remove();
        };

        View.prototype.bindEvent = function() {
            var $menu;
            $menu = this.$el.find('ul');
            return $menu.on('mouseenter.complate-at', 'li', function(e) {
                $menu.find('.cur').removeClass('cur');
                return $(e.currentTarget).addClass('cur');
            }).on('click.complate-at', 'li', (function(_this) {
                return function(e) {
                    $menu.find('.cur').removeClass('cur');
                    $(e.currentTarget).addClass('cur');
                    _this.choose(e);
                    return e.preventDefault();
                };
            })(this));
        };

        View.prototype.visible = function() {
            return this.$el.is(":visible");
        };

        View.prototype.choose = function(e) {
            var $li, content;
            if (($li = this.$el.find(".cur")).length) {
                content = this.context.insertContentFor($li);
                this.context.insert(this.context.callbacks("beforeInsert").call(this.context, content, $li), $li);
                this.context.trigger("inserted", [$li, e]);
                this.hide(e);
            }
            if (this.context.getOpt("hideWithoutSuffix")) {
                return this.stopShowing = true;
            }
        };

        View.prototype.reposition = function(rect) {
            var offset, overflowOffset, _ref, _window;
            _window = this.context.app.iframeAsRoot ? this.context.app.window : window;
            if (rect.bottom + this.$el.height() - $(_window).scrollTop() > $(_window).height()) {
                rect.bottom = rect.top - this.$el.height();
            }
            if (rect.left > (overflowOffset = $(_window).width() - this.$el.width() - 5)) {
                rect.left = overflowOffset;
            }
            offset = {
                left: rect.left,
                top: rect.bottom
            };
            if ((_ref = this.context.callbacks("beforeReposition")) != null) {
                _ref.call(this.context, offset);
            }
            this.$el.offset(offset);
            return this.context.trigger("reposition", [offset]);
        };

        View.prototype.next = function() {
            var cur, next;
            cur = this.$el.find('.cur').removeClass('cur');
            next = cur.next();
            if (!next.length) {
                next = this.$el.find('li:first');
            }
            next.addClass('cur');
            return this.$el.animate({
                scrollTop: Math.max(0, cur.innerHeight() * (next.index() + 2) - this.$el.height())
            }, 150);
        };

        View.prototype.prev = function() {
            var cur, prev;
            cur = this.$el.find('.cur').removeClass('cur');
            prev = cur.prev();
            if (!prev.length) {
                prev = this.$el.find('li:last');
            }
            prev.addClass('cur');
            return this.$el.animate({
                scrollTop: Math.max(0, cur.innerHeight() * (prev.index() + 2) - this.$el.height())
            }, 150);
        };

        View.prototype.show = function() {
            var rect;
            if (this.stopShowing) {
                this.stopShowing = false;
                return;
            }
            if (!this.visible()) {
                this.$el.show();
                this.$el.scrollTop(0);
                this.context.trigger('shown');
            }
            if (rect = this.context.rect()) {
                return this.reposition(rect);
            }
        };

        View.prototype.hide = function(e, time) {
            var callback;
            if (!this.visible()) {
                return;
            }
            if (isNaN(time)) {
                this.$el.hide();
                return this.context.trigger('hidden', [e]);
            } else {
                callback = (function(_this) {
                    return function() {
                        return _this.hide();
                    };
                })(this);
                clearTimeout(this.timeoutID);
                return this.timeoutID = setTimeout(callback, time);
            }
        };

        View.prototype.render = function(list, type) {
            var $li, $ul, item, li, tpl, _len, html;
            if (!($.isArray(list) && list.length > 0)) {
                this.hide();
                return;
            }
            this.$el.find('ul').empty();
            $ul = this.$el.find('ul');

            if (type) {
                tpl = this.context.getOpt('displayTpl');
                for (var i = 0, len = list.length; i < len; i++) {
                    item = list[i];
                    item = $.extend({}, item, {
                        'atwho-at': this.context.at
                    });
                    li = $(this.context.callbacks("tplEval").call(this.context, tpl, item));
                    li.data("item-data", item);
                    $ul.append(li);
                }
            } else {
                tpl = this.context.getOpt('groupTpl');
                html = [];

                for (var i = 0, len = list.length; i < len; i++) {
                    item = list[i];
                    item = $.extend({}, item, {
                        'atwho-at': this.context.at
                    });
                    html.push(this.context.callbacks("tplEval").call(this.context, tpl, item));
                }
                html = html.join(' ');
                li = $('<li class="complate-at-group" data-type="group">' + html + '</li>');
                $ul.append(li);
            }

            this.show();
            if (this.context.getOpt('highlightFirst')) {
                return $ul.find("li:first").addClass("cur");
            }
        };

        return View;

    })();

    KEY_CODE = {
        DOWN: 40,
        UP: 38,
        ESC: 27,
        TAB: 9,
        ENTER: 13,
        CTRL: 17,
        P: 80,
        N: 78,
        LEFT: 37,
        RIGHT: 39,
        BACKSPACE: 8,
        SPACE: 32
    };

    DEFAULT_CALLBACKS = {
        beforeSave: function(data) {
            return Controller.arrayToDefaultHash(data);
        },
        matcher: function(flag, subtext, should_startWithSpace) {
            var match, regexp, _a, _y;
            flag = flag.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            if (should_startWithSpace) {
                flag = '(?:^|\\s)' + flag;
            }
            _a = decodeURI("%C3%80");
            _y = decodeURI("%C3%BF");
            regexp = new RegExp("" + flag + "([A-Za-z" + _a + "-" + _y + "0-9_\.\+\-]*)$|" + flag + "([^\\x00-\\xff]*)$", 'gi');
            match = regexp.exec(subtext);
            if (match) {
                return match[2] || match[1];
            } else {
                return null;
            }
        },
        filter: function(query, data, searchKey) {
            var item, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = data.length; _i < _len; _i++) {
                item = data[_i];
                if (~new String(item[searchKey]).toLowerCase().indexOf(query.toLowerCase())) {
                    _results.push(item);
                }
            }
            return _results;
        },
        remoteFilter: null,
        sorter: function(query, items, searchKey) {
            var item, _i, _len, items;
            if (!query) {
                return items;
            }
            return items.sort(function(a, b) {
                return a.atwho_order - b.atwho_order;
            });
        },
        tplEval: function(tpl, map) {
            var error;
            try {
                return tpl.replace(/\$\{([^\}]*)\}/g, function(tag, key, pos) {
                    return map[key];
                });
            } catch (_error) {
                error = _error;
                return "";
            }
        },
        beforeInsert: function(value, $li) {
            return value;
        },
        beforeReposition: function(offset) {
            return offset;
        },
        afterMatchFailed: function(at, el) {}
    };

    Api = {
        load: function(at, data) {
            var c;
            if (c = this.controller(at)) {
                return c.model.load(data);
            }
        },
        isSelecting: function() {
            var _ref;
            return (_ref = this.controller()) != null ? _ref.view.visible() : void 0;
        },
        setIframe: function(iframe, asRoot) {
            this.setupRootElement(iframe, asRoot);
            return null;
        },
        run: function() {
            return this.dispatch();
        },
        destroy: function() {
            this.shutdown();
            return this.$inputor.data('atwho', null);
        }
    };

    $.fn.atwho = function(method) {
        var result, _args;
        _args = arguments;
        result = null;
        method = method || this.atwho["default"];
        this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each(function() {
            var $this, app;
            if (!(app = ($this = $(this)).data("atwho"))) {
                $this.data('atwho', (app = new App(this)));
            }
            if (typeof method === 'object' || !method) {
                return app.reg(method.at, method);
            } else if (Api[method] && app) {
                return result = Api[method].apply(app, Array.prototype.slice.call(_args, 1));
            } else {
                return $.error("Method " + method + " does not exist on jQuery.caret");
            }
        });
        return result || this;
    };

    // 加载联系人
    var loadMember = function(wd, callback) {
        var type = !/^\-(p|d)/.test(wd);
        if (wd && wd.length > 0) {
            $.ajax({
                // url: '/common/ajax/SuggestionAt.jsx',
                url: 'data.json',
                type: "GET",
                dataType: "json",
                data: '_input_charset=utf-8&key=' + encodeURIComponent(wd),
                success: function(list) {
                    callback(list, type);
                },
                error: function() {
                    callback([], type);
                }
            });
        }
    };

    $.fn.atwho["default"] = {
        at: '@',
        insertTpl: "${atwho-at}${text}(${staffId})",
        searchKey: "text",
        hideWithoutSuffix: false,
        startWithSpace: false,
        highlightFirst: true,
        limit: 5,
        maxLen: 20,
        displayTimeout: 300,
        delay: null,
        spaceSelectsMatch: false,
        callbacks: {
            remoteFilter: loadMember
        },
        groupTpl: '<span class="at-item">${atwho-at}${text}(${staffId})</span>',
        displayTpl: '<li data-type="item" class="complate-at-item"><img src="${img}" width="80px" height="80px" /><div class="item-indent"><div class="item-name">${text} - ${staffId}</div><div class="item-ext">${info}</div></div></li>'
    };
})();