define(['./module', 'app/components/patch'], function(module, patch) {
    'use strict';

    var Controller = function(scope, Gallery, state, http, Api) {

        console.log(Api);
        // 加载数据
        function loadData() {
            Gallery.search(scope.wd).then(function(resp) {
                scope.data = resp;
            });
        }

        if (!state.params.wd) {
            var argv = {
                wd: '阿里巴巴'
            };

            // 跳转函数
            state.go('app.about', argv);
            return null;
        }

        // 默认参数
        scope.wd = state.params.wd;

        // 当前时间
        scope.now = new Date;

        // 提交表单
        scope.submit = function() {
            var argv = {
                wd: this.wd
            };
            // 跳转函数
            state.go('app.about', argv);
        };

        // 提交按钮
        scope.click = function() {
            var req = {
                method: 'POST',
                url: '/api/biz',
                data: {
                    log: 'redrect'
                },
                transformRequest: patch.transformRequest('POST')
            }
            http(req).success(function(r) {
                // 等待半秒出发提交
                setTimeout(scope.submit.bind(scope), 20);
            });
        };
        loadData();
    };

    // 注册到上下文
    module.controller('App.AboutCtrl', ['$scope', 'Gallery', '$state', '$http', 'Api', Controller]);
});