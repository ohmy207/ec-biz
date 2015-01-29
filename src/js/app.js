define([
    'angular',
    'uiRouter',
    'ngResource',
    'uiBootstrap',
    './controllers/index',
    './directives/index',
    './services/index'
], function(ng) {
    'use strict';

    return ng.module('app', [
        'app.services',
        'app.controllers',
        'app.directives',
        'ui.router',
        'ui.bootstrap',
        'ngResource'
    ]);
});