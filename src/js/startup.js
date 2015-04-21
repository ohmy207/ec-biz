'use strict';

// 【启动流程】

// 1. 定义控制器
// 2. 定义App
// 3. 定义路由规则
// 4. bootstrap启动

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
            window.console[names[i]] = function() {}
        }
    }
})();

define([
    'require',
    'angular',
    './app',
    './config/router'
], function(require, angular, app) {
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
            angular.bootstrap(document, ['app']);
            app.log('[startup] angular.bootstrap()');
        });
});