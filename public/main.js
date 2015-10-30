/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    app.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

require.config({

    baseUrl: '/public',

    paths: {
        // 基础框架配置
        'jquery': 'vendor/jquery/dist/jquery',
        'angular': 'vendor/angular/angular',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',

        'angular-animate': 'vendor/angular-animate/angular-animate',
        'angular-bootstrap': 'vendor/angular-bootstrap/ui-bootstrap-tpls',
        'angular-resource': 'vendor/angular-resource/angular-resource',
        'angular-sanitize': 'vendor/angular-sanitize/angular-sanitize',
        'angular-websocket': 'vendor/angular-websocket/angular-websocket',
        'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
        'angular-ui-utils': 'vendor/angular-ui-utils/ui-utils',

        // 三方插件配置
        'ready': 'vendor/requirejs-domready/domReady',
        'text': 'vendor/requirejs-text/text',
        'external': 'js/config/external'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular',
            deps: [
                'jquery'
            ]
        },
        'bootstrap': {
            deps: [
                'jquery'
            ]
        },
        'jquery': {
            exports: 'jquery'
        },
        'angular-bootstrap': {
            deps: ['jquery', 'angular', 'bootstrap']
        }
    },

    waitSeconds: 3
});

// kick start application... see startup.js
require(['js/startup']);