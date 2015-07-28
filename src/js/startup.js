'use strict';

/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
(function() {
    if (!window.console || !console.info) {
        var names = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml',
            'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'
        ];
        window.console = {};
        for (var i = 0; i < names.length; i++) {
            window.console[names[i]] = function() {};
        }
    }
})();

define(['require', 'angular', './app', './modules/config'], function(require, angular, app, config) {

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */
    require([
            'angular-animate',
            'angular-resource',
            'angular-ui-router',
            'angular-sanitize',
            'angular-bootstrap',
            'angular-ui-utils',
            'angular-websocket'
        ],

        function() {
            console.log('[startup] angular.bootstrap()');

            if (typeof config == 'function') {
                config(app, {});
            } else {
                throw '[error] config';
            }

            angular.bootstrap(document, ['app']);
            angular.element('.loading-container').fadeOut();

            console.log(new Date() - GLOBAL_BOOTTIME);
        });
});