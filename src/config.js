/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    baseUrl: 'src/',

    paths: {
        // 基础框架配置
        'jquery': 'vendor/jquery/dist/jquery',
        'angular': 'vendor/angular/angular',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',

        'angular-animate': 'vendor/angular-animate/angular-animate',
        'angular-bootstrap': 'vendor/angular-bootstrap/ui-bootstrap-tpls',
        'angular-resource': 'vendor/angular-resource/angular-resource',
        'angular-mocks': 'vendor/angular-mocks/angular-mocks',
        'angular-sanitize': 'vendor/angular-sanitize/angular-sanitize',
        'angular-websocket': 'vendor/angular-websocket/angular-websocket',
        'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
        'angular-ui-utils': 'vendor/angular-ui-utils/ui-utils',

        // 三方插件配置
        'ready': 'vendor/requirejs-domready/domReady',
        'text': 'vendor/requirejs-text/text',

        // // 业务模块配置
        // 'app': 'js/app',
        // 'config': 'js/config',
        // 'modules': 'js/modules',
        // 'components': 'js/components'
    },

    config: {
        text: {

            //Valid values are 'node', 'xhr', or 'rhino'
            env: 'xhr',
            onXhrComplete: function(xhr, url) {
                //Called whenever an XHR has completed its work. Useful
                //if browser-specific xhr cleanup needs to be done.
            }
        }
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
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
        'angular-ui-utils': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
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

    priority: ['angular', 'jquery'],

    deps: [
        // kick start application... see startup.js
        'js/startup',
        'bootstrap'
    ],
    urlArgs: "v=" + (+new Date)
});