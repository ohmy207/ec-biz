/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    app.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

define(['require', 'angular', './components/index', './config/index', './modules/index'], function(require, angular) {

    // just need to create a module
    angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'ui.utils',

        'ngAnimate',
        'ngResource',
        'ngSanitize',
        'ngWebSocket',

        'appConfig',
        'appFilter',
        'appBootable',
        'appDirective'
    ]);
});