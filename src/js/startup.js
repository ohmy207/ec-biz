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
            window.console[names[i]] = function() {
                // noop
            };
        }
    }
})();

define(['require', 'angular', 'app', './modules/config'], function(require, angular, app, config) {

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
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
            console.debug('[startup] angular.bootstrap()');

            if (typeof config == 'function') {
                config(app);
            }

            angular.bootstrap(document, ['app']);
            angular.element('.loading-container').fadeOut();

            console.debug(new Date() - GLOBAL_STARTTIME);
        });
});