/**
 * @file 搜索列表的View类
 * @author zhangxuan06
 */

define(function (require) {

    var UIView = require('ef/UIView');
    var util = require('er/util');
    var buildUrl = require('biz/buildUrl');
    var encodeHTML = baidu.encodeHTML;
    var Dialog = require('esui/Dialog');
    var locator = require('er/locator');

    /**
     * 计划列表View的构造函数 
     *
     * @constructor
     * @extends View
    */
    function ListView() {
        UIView.apply(this, arguments);
    }

    util.inherits(ListView, UIView);

    var tableFields = [
        {
            title: '创意名称',
            field: 'ideaName',
            width: 150,
            editable: 1,
            content: function (item) {
                return item.title;

            }
        },
        {
            title: '单元名称',
            field: 'unitName',
            content: function (item) {
                return T.format('<div><a href="#{url}" title="#{unitName}">#{unitName}</a></div>', {
                    url: buildUrl('/idea/list', item.unitId, 'unit'),
                    unitName: item.unitName
                });
            }
        },
        {
            title: '计划名称',
            field: 'planName',
            content: function (item) {
                return T.format('<div><a href="#{url}" title="#{planName}">#{planName}</a></div>', {
                    url: buildUrl('/unit/list', item.planId, 'plan'),
                    planName: item.planName
                });
            }
        }
    ];

    /**
     * View绑定esui组件的数据和属性
     * 
     * @public
    */
    ListView.prototype.uiProperties = util.mix({
        ListTable: {
            datasource: '@data.list',
            columnResizable: 1,
            fields: tableFields
        },
        ListSearch: {
            required: 1,
            requiredErrorMessage: '关键字不能为空',
            value: '@keyword'
        },
        ListPager: {
            count: '@total',
            page: '@pageNum',
            pageSize: '@pageSize',
            pageSizes: [20, 50, 100],
            layout: 'distributedReverse',
            pageType: 'plain'
        }
    }, UIView.prototype.uiProperties);

    /**
     * View绑定esui组件的事件
     * 
     * @public
    */
    ListView.prototype.uiEvents = util.mix({
        ListPager: {
            changepagesize: function (e) {
                this.fire('changepagesize', {
                    evt: e
                });
            },
            changepage: function (e) {
                this.fire('changepage', {
                    evt: e
                });
            }
        },
        SearchBtn: {
            click: function (e) {
                var uiPlanName = this.get('ListSearch');

                if (!uiPlanName.validate()) {
                    return;
                }
                var keyword = this.get('ListSearch').getValue();
                var data = {keyword: keyword};
                var url = '#/search/list~' + T.url.jsonToQuery(data);
                locator.redirect(url);
            }
        }
    }, UIView.prototype.uiEvents);

    require('er/tpl!./list.tpl.html');

    //mix template attr for listview prototype
    util.mix(ListView.prototype, {
        template: 'searchList',
        enterDocument: function () {
            UIView.prototype.enterDocument.apply(this, arguments);
        }
    });

    return ListView;
});