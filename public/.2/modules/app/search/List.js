/**
 * @file 搜索列表的Action类
 * @author zhangxuan06
 */

define(function (require) {

    var Action = require('er/Action');
    var util = require('er/util');
    var updateQuery = require('biz/updateQuery');
    /**
     * 计划列表Action的构造函数 
     *
     * @constructor
     * @extends Action
    */
    function ListAction() {
        Action.apply(this, arguments);
    }

    
    util.inherits(ListAction, Action);

    util.mix(ListAction.prototype, {
        modelType: require('./ListModel'),
        viewType: require('./ListView')
    });

    /**
     * 初始化ListAction
     * 
     * @public
    */
    ListAction.prototype.initBehavior = function () {

        var action = this;
        Action.prototype.initBehavior.apply(action, arguments);

        var model = action.model;
        var view = action.view;

        // 分页size发生变更的时候的事件
        view.on('changepagesize', function (params) {
            updateQuery(action, {
                pageSize: params.evt.target.pageSize,
                pageNum: 1
            });
        });

        // 页码发生变更的时候的事件
        view.on('changepage', function (params) {
            updateQuery(action, {
                pageNum: parseInt(params.evt.target.page, 10)
            });
        });
    };

    return ListAction;
});