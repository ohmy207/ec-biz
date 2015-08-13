/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    app.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

define(['angular', 'components/index', 'config/index'], function(angular) {

    // just need to create a module
    return angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'ui.utils',

        'ngAnimate',
        'ngResource',
        'ngSanitize',
        'ngWebSocket',

        'appConfig',
        'appFilter',
        'appDirective'
    ]);
});