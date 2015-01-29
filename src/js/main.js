require.config({

    // alias libraries paths
    paths: {
        'domReady': '../vendor/requirejs-domready/domReady',
        'jquery': '../vendor/jquery/dist/jquery',
        'angular': '../vendor/angular/angular',
        'uiRouter': '../vendor/angular-ui-router/release/angular-ui-router',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap',
        'uiBootstrap': '../vendor/angular-bootstrap/ui-bootstrap-tpls',
        'ngResource': '../vendor/angular-resource/angular-resource'
    },
    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter': {
            deps: ['angular']
        },
        'ngResource': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'uiBootstrap': {
            deps: ['angular', 'bootstrap']
        }
    },

    // kick start application
    deps: ['./start']
});