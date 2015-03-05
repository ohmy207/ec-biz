define(['./module', 'app/components/patch'], function(module, patch) {
    'use strict';

    var Controller = function(scope, Gallery, state, http, Api) {
        if (!state.params.href) {
            var argv = {
                href: '//www.baidu.com/'
            };
            // 跳转函数
            state.go('app.external', argv);
            return;
        }
        scope.href = state.params.href;
    };

    // 注册到上下文
    module.controller('App.ExternalCtrl', ['$scope', 'Gallery', '$state', '$http', 'Api', Controller]);
});