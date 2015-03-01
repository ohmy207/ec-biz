/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',

    './app/controller/index',
    './app/directive/index',
    './app/service/index'
], function(ng) {
    'use strict';


    var application = ng.module('application', [
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