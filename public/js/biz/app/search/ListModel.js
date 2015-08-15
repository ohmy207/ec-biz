/**
 * @file 搜索列表的Model类
 * @author zhangxuan06
 */
define(function (require) {

    var Model = require('er/Model');
    var datasource = require('er/datasource');
    var ajax = require('common/ejson');
    var getQuery = require('biz/getQuery');
    var url = require('biz/url');
    var util = require('er/util');

    /**
     * 搜索Model的构造函数 
     *
     * @constructor
     * @extends Model
    */
    function ListModel() {

        var me = this;
        Model.apply(me, arguments);
        var keyword = me.get('keyword');
        var options = getQuery();
        me.datasource = [
            {
                retrieve: datasource.remote('/temai-biz/idea/search', {
                    method: 'GET',
                    data: {
                        key: keyword,
                        pageNum: options.pageNum,
                        pageSize: options.pageSize
                    }
                }),
                dump: 1
            }
        ];

    }

    util.inherits(ListModel, Model);

    util.mix(ListModel.prototype, {

        /**
         * Model生成后准备数据
         * 
         * @public
        */
        prepare: function () {
            var model = this;
            Model.prototype.prepare.apply(model, arguments);
            var data = model.get('data');
            if(typeof data.list == 'undefined') {
                data.list = [];
            }
            model.set('data',data);
            model.set('total', data.totalNum);
        }


    });

    return ListModel;

});