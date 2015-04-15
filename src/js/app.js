/*
 * Copyright 2014 Baidu Inc. All rights reserved.
 *
 * file:    app.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

define(['angular' /*, 'modules/config'*/ ], function(angular) {

    // * loads sub modules and wraps them up into the `app` module
    // * this should be used for top-level module definitions only
    var app = angular.module('app', [

        // 'app.service',
        // 'app.controller',
        // 'app.directive',

        'ui.router',
        'ui.bootstrap',
        'ui.utils',

        'ngAnimate',
        'ngSanitize',
        'ngResource',
        'ngWebSocket'
    ]);

    // var home = app.controller('App.Home', ['$scope', '$state',
    //     function(scope, state) {
    //         scope.template = state.params;
    //         scope.href = "/page/"
    //     }
    // ]);

    // app.config(['$stateProvider', '$urlRouterProvider',
    //     function(stateProvider, urlRouterProvider) {
    //         stateProvider.state('home', {
    //             url: "/app/home/:url",
    //             controller: 'App.Home',
    //             template: '<h1>inline {{template}} definition</h1><iframe class="embedding-if" ng-src="{{href}}"></iframe>',
    //         });
    //         urlRouterProvider.otherwise('/app/home/');
    //     }
    // ]);

    // 调试日志
    app.log = function(message, type) {
        type = type || 'debug';
        console[type](message);
    };

    app.log('[app] angular.module("app")');
    return app;
});