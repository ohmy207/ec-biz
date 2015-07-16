/*
 * Copyright 2014 Baidu Inc. All rights reserved.
 *
 * file:    router.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

// global router config
define(['require', 'angular'], function(require, angular) {

    var available = 1;

    // router map list
    var routerMap = {
        'app': {
            url: "/app",
            abstract: true,
            // controller: 'AppCtrl'
        },

        'app.home': {
            url: "/home",
            views: {
                'screen': {
                    // controller: 'App.HomeCtrl'
                }
            }
        },

        'app.external': {
            url: "/external/{href:.*}",
            views: {
                'screen': {
                    controller: function($scope, $state, $stateParams) {
                        if (!$state.params.href) {
                            var argv = {
                                href: 'http://www.baidu.com/'
                            };
                            // 跳转函数

                            $state.go('app.external', argv);
                            return;
                        }
                        console.log($stateParams)
                        // $scope.href = decodeURIComponent($state.params.href);
                    }
                }
            }
        }
    };

    // return a method.
    return function(app, autoIndex) {

        if (available) {
            app.config(['$stateProvider', '$urlRouterProvider',
                function(stateProvider, urlRouterProvider) {
                    stateProvider.decorator('views', decoratorView);

                    for (var state in routerMap) {
                        stateProvider.state(state, routerMap[state])
                    }
                    // has default index page.
                    autoIndex && urlRouterProvider.otherwise(autoIndex);

                }
            ]);

            app.run(['$rootScope', '$state', '$stateParams', runMethod]);
        }

        available = 0;
    };

    function runMethod(rootScope, state, stateParams) {
        rootScope.$state = state;
        rootScope.$stateParams = stateParams;
    }

    function decoratorView(state, parent) {
        var result = {},
            views = parent(state);

        angular.forEach(views, function(config, name) {
            var statePath = (state.name).replace('.', '/');
            if (!config.templateUrl) {
                config.templateUrl = '/src/page/' + statePath + '.html';
            }
            result[name] = config;
        });
        return result;
    }
});