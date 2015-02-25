/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
if (!window.console || !console.info) {
    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
        "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"
    ];

    window.console = {};
    for (var i = 0; i < names.length; ++i) {
        window.console[names[i]] = function() {}
    }
}

define([
    'require',
    'angular',
    './app',
    './routes'
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


var group = [

    function(context, next) {
        console.log(1);
        next();
    },
    function(context, next) {
        console.log(2);
        setTimeout(function() {
            next();
        }, 1000);
    },
    function(context, next) {
        next();
    }
];

function invoker() {
    var group = [].slice.call(arguments, 0);
    var next = function() {
        if (group.length) {
            group.shift()(null, next);
        } else {
            console.log('...');
        }
    };
    return next;
}