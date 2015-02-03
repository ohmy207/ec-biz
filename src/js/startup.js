/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require',
    'angular',
    'app',
    'routes'
], function(require, angular, app) {
    'use strict';

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */
    require(['ready!', 'angular-animate', 'angular-route', 'angular-resource', 'ui-bootstrap'], function() {
        angular.bootstrap(document, ['app']);
    });
});