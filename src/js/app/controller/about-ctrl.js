define(['./module', 'app/components/patch'], function(module, patch) {
    'use strict';

    var Controller = function(scope, Gallery, state, http, Api) {
        // 加载数据
        function loadData() {
            Gallery.search(scope.wd).then(function(resp) {
                scope.data = resp;
            });
        }
        if (!state.params.wd) {
            // 跳转函数
            state.go('app.about', {
                wd: '阿里巴巴'
            });
            return null;
        }

        // 默认参数
        scope.wd = state.params.wd;

        // 当前时间
        scope.now = new Date;

        scope.timer = setInterval(function() {
            scope.now = new Date;

            // 手动触发渲染
            scope.$apply();
        }, 1000);

        scope.$on('$destroy', function() {
            clearInterval(scope.timer);
        });

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
                    log: 'rec'
                },
                transformRequest: patch.transformRequest('POST')
            }
            http(req).success(function(r) {
                // 等待片刻提交
                setTimeout(scope.submit.bind(scope), 1000);
            });
        };
        loadData();
    };

    // 注册到上下文
    module.controller('App.AboutCtrl', ['$scope', 'Gallery', '$state', '$http', 'Api', Controller]);
});