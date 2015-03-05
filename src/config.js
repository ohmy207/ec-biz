/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    baseUrl: 'src/',

    // alias libraries paths
    paths: {
        'jquery': 'vendor/jquery/dist/jquery',
        'angular': 'vendor/angular/angular',

        'angular-animate': 'vendor/angular-animate/angular-animate',
        'angular-resource': 'vendor/angular-resource/angular-resource',
        'angular-route': 'vendor/angular-ui-router/release/angular-ui-router',
        'angular-sanitize': 'vendor/angular-sanitize/angular-sanitize',
        'angular-utils': 'vendor/angular-ui-utils/ui-utils',

        'ready': 'vendor/requirejs-domready/domReady',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'ui-bootstrap': 'vendor/angular-bootstrap/ui-bootstrap-tpls',

        'app': 'js/app',
        'es5-sham': 'vendor/es5-shim/es5-sham'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'jquery': {
            exports: 'jquery'
        },
        'ui-bootstrap': {
            deps: ['angular', 'bootstrap']
        }
    },

    priority: ['angular'],

    deps: [
        // kick start application... see startup.js
        'js/startup'
    ],
    urlArgs: "v=" + Math.random()
});