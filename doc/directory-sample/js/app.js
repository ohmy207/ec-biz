/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',

    './app/router/index',
    './app/controller/index',
    './app/directive/index',
    './app/service/index'
], function(angular, router, controller, directive, service) {
    'use strict';

    var application = angular.module('application', [
        'app.services',
        'app.controllers',
        'app.directives',
        'ui.router',
        'ui.bootstrap',
        'ui.utils',
        'ngResource',
        'ngAnimate'
    ]);
    return application;
});