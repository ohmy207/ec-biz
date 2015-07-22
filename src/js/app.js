/*
 * Copyright 2014 Baidu Inc. All rights reserved.
 *
 * file:    app.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

define(['angular'], function(angular) {

    // * loads sub modules and wraps them up into the `app` module
    // * this should be used for top-level module definitions only
    var app = angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'ui.utils',

        'ngAnimate',
        'ngSanitize',
        'ngResource',
        'ngWebSocket'
    ]);
    console.log('[app] angular.module("app")');

    window.A = app;
    return app;
});