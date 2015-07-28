/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    app.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

define(['angular'], function(angular) {

    var main = angular.module('appMain', []);


    // * loads sub modules and wraps them up into the `app` module
    // * this should be used for top-level module definitions only
    var app = angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'ui.utils',

        'ngAnimate',
        'ngSanitize',
        'ngResource',
        'ngWebSocket',

        'appMain'
    ]);
    console.log('[app] angular.module("app")');

    app.controller('bootController', ['$rootScope', '$scope', function(rootScope, scope) {

    }]);

    app.directive('hello', function() {
        return {
            restrict: 'E',
            template: '<div>Hi there</div>',
            replace: true
        };
    });


    window.A = app;
    return app;
});