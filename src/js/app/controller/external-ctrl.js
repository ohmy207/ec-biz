define(['./module', 'app/components/patch'], function(module, patch) {
    'use strict';

    var Controller = function(scope, Gallery, state, http, Api) {
        if (!state.params.href) {
            var argv = {
                href: '//vip.tmall.com/vip/index.htm'
            };
            // 跳转函数
            state.go('app.external', argv);
            return null;
        }
        scope.href = state.params.href;
    };

    // 注册到上下文
    module.controller('App.ExternalCtrl', ['$scope', 'Gallery', '$state', '$http', 'Api', Controller]);
});