define([
    'require',
    'angular',
    'app',
    'routes'
], function(require, ng, app, routes) {
    'use strict';
    require(['domReady!'], function(document) {
        ng.bootstrap(document, ['app']);
    });
});