/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    context.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';
define(['angular'], function(angular) {

    var service = angular.module('app.service', []);
    var controller = angular.module('app.controller', []);
    var directive = angular.module('app.directive', []);

    return {
        service: service,
        controller: controller,
        directive: directive
    };
});