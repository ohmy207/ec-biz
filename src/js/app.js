/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',

    './app/router/index',
    './app/controller/index',
    './app/directive/index',
    './app/filter/index',
    './app/service/index'

], function(angular, router, controller, directive, filter, service) {
    'use strict';

    var application = angular.module('application', [
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
    application.filter(filter);

    console.debug('[app.js] createApp()');
    return application;
});