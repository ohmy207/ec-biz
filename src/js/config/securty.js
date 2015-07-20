/*
 * Copyright 2014 Baidu Inc. All rights reserved.
 *
 * file:    securty.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

// global router config
define(['require', 'angular'], function(require, angular) {

    return function(app) {
        app.config(['$sceDelegateProvider',
            function(sceDelegateProvider) {
                sceDelegateProvider.resourceUrlWhitelist(
                    ['self', 'http://**', 'https://**']
                );
            }
        ]);
    };
});