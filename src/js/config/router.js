/*
 * Copyright 2014 Baidu Inc. All rights reserved.
 *
 * file:    router.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';
define(['angular'], function(angular) {
    
});



define(['angular', '../app'], function(angular, app) {

    console.log(app);
    // 注入路由对象
    app.run(
        ['$rootScope', '$state', '$stateParams',
            function(rootScope, state, stateParams) {

                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
                // to active whenever 'contacts.list' or one of its decendents is active.
                rootScope.$state = state;
                rootScope.$stateParams = stateParams;
            }
        ]
    );

    // 配置路由规则
    app.config(
        ['$stateProvider', '$urlRouterProvider',
            function(stateProvider, urlRouterProvider) {
                stateProvider.decorator('views', function(state, parent) {
                    var result = {},
                        views = parent(state);

                    angular.forEach(views, function(config, name) {
                        var autoName = (state.name).replace('.', '/');
                        if (!config.templateUrl) {
                            config.templateUrl = '/src/page/' + autoName + '.html';
                        }
                        result[name] = config;
                    });
                    return result;
                })

                .state('app', {
                    url: "/app",
                    abstract: true,
                    controller: 'AppCtrl'
                })

                .state('app.home', {
                    url: "/home",
                    views: {
                        'screen': {
                            controller: 'App.HomeCtrl'
                        }
                    }
                })

                .state('app.about', {
                    url: "/about/:wd",
                    views: {
                        'screen': {
                            controller: 'App.AboutCtrl'
                        }
                    }
                })

                .state('app.external', {
                    url: "/external/{href:.*}",
                    views: {
                        'screen': {
                            controller: 'App.ExternalCtrl'
                        }
                    }
                });
                // urlRouterProvider.otherwise('/app/home');
            }
        ]);
});