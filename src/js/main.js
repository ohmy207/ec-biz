/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({
    // alias libraries paths
    paths: {
        'jquery': '../vendor/jquery/dist/jquery',
        'angular': '../vendor/angular/angular',

        'angular-animate': '../vendor/angular-animate/angular-animate',
        'angular-resource': '../vendor/angular-resource/angular-resource',
        'angular-route': '../vendor/angular-ui-router/release/angular-ui-router',
        'angular-sanitize': '../vendor/angular-sanitize/angular-sanitize',

        'ready': '../vendor/requirejs-domready/domReady',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap',
        'ui-bootstrap': '../vendor/angular-bootstrap/ui-bootstrap-tpls'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'angular': {
            exports: 'angular'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'ui-bootstrap': {
            deps: ['angular', 'bootstrap']
        }
    },

    deps: [
        // kick start application... see startup.js
        './startup'
    ]
});