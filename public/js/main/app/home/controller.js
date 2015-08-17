/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    index.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
define(['angular', '../module'], function(angular, module) {

    module.config(['$stateProvider', function(stateProvider) {

        // app is an abstract controller.
        stateProvider.state('app', {
            url: '/app',
            'abstract': true,
            templateUrl: 'public/page/app.html'
        })

        .state('app.home', {
            url: '/home',
            views: {
                'screen': {
                    templateUrl: 'public/page/app/home.html'
                }
            }
        });
    }]);
});