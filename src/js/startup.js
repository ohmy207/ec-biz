'use strict';

/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
(function(global) {
    if (!global.console || !console.info) {
        var names = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml',
            'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'
        ];
        global.console = {};
        for (var i = 0; i < names.length; i++) {
            global.console[names[i]] = function() {}
        }
    }
})(window);

define([
    'require',
    'angular',
    './app',
    './modules/config'
], function(require, angular, app, config) {

    if (typeof config == 'function') {
        config(app);
    }

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */
    require([
            'ready!',

            'angular-animate',
            'angular-resource',
            'angular-ui-router',
            'angular-sanitize',
            'angular-bootstrap',
            'angular-ui-utils',
            'angular-websocket'
        ],

        function(document, page) {
            app.log('[startup] angular.bootstrap()');
            angular.bootstrap(document, ['app']);
        });
});