'use strict';

/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
(function() {
    if (!window.console) {
        var names = [
            'log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml', 'group', 'groupEnd',
            'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'
        ];
        window.console = {};
        for (var i = 0; i < names.length; i++) {
            window.console[names[i]] = function() {};
        }
    }

    // window.onerror = function() {
    //      return true;
    // };
})();

define(['require', 'bootstrap', 'angular', './app', './components/index'], function(require, _, angular, app) {

    /*
     * The following resources do not need to be merged, so wrap them with `require`.
     */
    require([
            'angular-animate',
            'angular-bootstrap',
            'angular-resource',
            'angular-sanitize',
            'angular-websocket',
            'angular-ui-router',
            'angular-ui-utils'
        ],
        function() {

            // OK, all resources are ready, bootstrap the application now!
            app.init(function() {
                angular.bootstrap(document, ['app']);
            });

            console.log('[startup.js] bootstrap finish.');
        });
});