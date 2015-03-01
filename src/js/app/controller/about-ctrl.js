define(['./module'], function(module) {
    'use strict';

    var Controller = function(scope, Gallery, state, stateParams) {

        // 加载数据
        function loadData() {
            Gallery.search(scope.wd).then(function(resp) {
                scope.data = resp;
            });
            Gallery.hot(scope.wd).then(function(resp) {
                scope.data = resp;
            });
        }

        if (!stateParams.wd) {
            var argv = {
                wd: '阿里巴巴'
            };

            // 跳转函数
            state.go('app.about', argv);
            return null;
        }

        // 默认参数
        scope.wd = stateParams.wd;

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

        };

        loadData();
    };

    // 注册到上下文
    module.controller('App.AboutCtrl', ['$scope', 'Gallery', '$state', '$stateParams', Controller]);
});