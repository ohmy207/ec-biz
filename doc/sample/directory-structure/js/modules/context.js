/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    index.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
(function(global, undefined) {
    'use strict'; // using strict mode

    // exports
    var exports = {
        version: '1.0.2'
    };

    /**
     * Copy properties from the source object to the target object
     *
     * @public
     * @param {Object} target the target object
     * @param {Object} obj the source object
     * @param {Boolean} overwrite if overwrite the same property, default 'true'
     * @return target
     */
    function extend(target, obj, overwrite) {
        if (undefined === overwrite) {
            overwrite = true;
        }
        for (var key in obj || {}) {
            if (obj.hasOwnProperty(key) && (overwrite || !target.hasOwnProperty(key))) {
                target[key] = obj[key];
            }
        }
        return target;
    }

    /**
     * Copy properties from the source object to the target object
     *
     * @public
     * @param {mixin..} target the target object
     * @return target
     */
    function mixin() {
        var result = {};
        for (var i = 0; i < arguments.length; i++) {
            var item = arguments[i] || {};
            for (var k in item) {
                result[k] = item[k];
            }
        }
        return result;
    }


    if (typeof require == "function" && typeof module == "object" && typeof module.exports == "object") {
        // [1] CommonJS/Node.js
        module.exports = exports;
    } else if (typeof define == "function" && define.amd) {
        // [2] AMD anonymous module
        define(function() {
            return exports;
        });
    } else {
        // [3] browser-side, global
        global.eTemplate = global.eTemplate || exports;
    }
})(this);