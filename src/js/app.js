/*
 * Copyright 2014 Baidu Inc. All rights reserved.
 *
 * file:    app.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

define(['angular', 'modules/config'], function(angular, config) {

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

    // 调试日志
    app.log = function(message, type) {
        type = type || 'debug';
        console[type](message);
    };

    // config the application.
    config(app);

    app.log('[app] angular.module("app")');
    return app;
});