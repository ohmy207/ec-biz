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

    // router map list
    var routerMap = {
        'app': {
            url: "/app",
            abstract: true
        },

        'app.home': {
            url: "/home",
            views: {
                'screen': {}
            }
        },

        'app.external': {
            url: "/external/{url:.*}",
            views: {
                'screen': {
                    controller: function($scope, $state, $stateParams) {
                        if (!$state.params.url) {
                            $state.go('app.external', {
                                url: 'http://www.baidu.com/'
                            });
                            return;
                        }
                        $scope.url = $stateParams.url;
                    }
                }
            }
        },

        'app.about': {
            url: "/about/:wd",
            views: {
                'screen': {
                    controller: function($scope, $state, $stateParams, $http) {
                        $scope.now = new Date();
                        var timer = setInterval(function() {
                            $scope.now = new Date();
                            $scope.$apply();
                        }, 1000);

                        $scope.$on(
                            "$destroy",
                            function(event) {
                                clearInterval(timer);
                            }
                        );
                    }
                }
            }
        }
    };

    // return a method.
    return function(app, autoIndex) {

        app.config(['$stateProvider', '$urlRouterProvider',
            function(stateProvider, urlRouterProvider) {
                stateProvider.decorator('views', decoratorView);

                for (var state in routerMap) {
                    stateProvider.state(state, routerMap[state])
                }
                if (autoIndex) {
                    urlRouterProvider.otherwise('/app/home');
                }
            }
        ]);
        app.run(['$rootScope', '$state', '$stateParams', runMethod]);
    };

    function runMethod(rootScope, state, stateParams) {
        rootScope.$state = state;
        rootScope.$stateParams = stateParams;
    }

    function decoratorView(state, parent) {
        var result = {},
            views = parent(state);

        angular.forEach(views, function(config, name) {
            if (!config.template && !config.templateUrl && !config.templateProvider) {
                var statePath = state.name.replace('.', '/');
                config.templateUrl = '/src/page/' + statePath + '.html';
            }
            result[name] = config;
        });

        return result;
    }
});