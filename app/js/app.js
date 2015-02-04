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

    return ng.module('app', [
        'app.services',
        'app.controllers',
        'app.directives',
        'ui.router',
        'ui.bootstrap',
        'ngResource',
        'ngAnimate'
    ]);
});