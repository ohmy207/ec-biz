/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',

    'app/router/index',
    'app/controller/index',
    'app/directive/index',
    'app/filter/index',
    'app/components/patch',
    'app/service/index'
], function(angular, router, controller, directive, filter, patch, service) {
    var app = angular.module('application', [
        'app.services',
        'app.controllers',
        'app.directives',
        'ui.bootstrap',
        'ui.router',
        'ui.utils',
        'ngAnimate',
        'ngResource'
    ]);

    // 注入过滤器函数
    app.filter(filter);

    // 注入自定义模块
    app.factory(patch);

    // 跨域安全策略申明
    app.config(['$sceDelegateProvider',
        function(sceDelegateProvider) {
            sceDelegateProvider.resourceUrlWhitelist(
                ['self', 'http://**', 'https://**']
            );
        }
    ]);

    app.factory('Api', [
        '$state', '$stateParams', '$http',
        function(state, stateParams, http) {
            return {
                state: function() {
                    console.log('state');
                }
            }
        }
    ]);
    return app;
});