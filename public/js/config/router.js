/**
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    router.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

// global router config
define(['angular', './module'], function(angular, app) {

    // router map list
    var routerMap = {
        'app': {
            url: '/app',
            'abstract': true
        },

        'app.home': {
            url: '/home',
            views: {
                'screen': {
                    // templateProvider: function() {
                    //     var def = jQuery.Deferred();
                    //     setTimeout(function() {
                    //         def.resolve('wefefce')
                    //     }, 1000);
                    //     return def;
                    // },
                }
            }
        },

        'app.external': {
            url: '/external/{url:.*}',
            views: {
                'screen': {
                    controller: function($scope, $state, $stateParams) {
                        if (!$state.params.url) {
                            $state.go('app.external', {
                                url: 'https://www.tmall.com/'
                            });
                            return;
                        }
                        $scope.url = $stateParams.url;
                    }
                }
            }
        },

        'app.about': {
            url: '/about/:wd',
            views: {
                'screen': {
                    controller: function($scope, $state, $stateParams, $http) {
                        $scope.now = new Date();
                        var timer = setInterval(function() {
                            $scope.now = new Date();
                            $scope.$apply();
                        }, 1000);

                        $scope.$on(
                            '$destroy',
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
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function(stateProvider, urlRouterProvider, locationProvider) {
            stateProvider.decorator('views', function(state, parent) {
                var result = {},
                    views = parent(state);

                angular.forEach(views, function(config, name) {
                    if (!config.template && !config.templateUrl && !config.templateProvider) {
                        var statePath = state.name.replace('.', '/');
                        config.templateUrl = 'public/page/' + statePath + '.html';
                    }
                    result[name] = config;
                });
                return result;
            });

            for (var state in routerMap) {
                if (routerMap.hasOwnProperty(state)) {
                    stateProvider.state(state, routerMap[state]);
                }
            }
            urlRouterProvider.otherwise('/app/home');

            // use the HTML5 History API
            locationProvider.html5Mode(true);
        }
    ])

    .run(['$rootScope', '$state', '$stateParams', '$templateCache',
        function(rootScope, state, stateParams, templateCache) {
            rootScope.$state = state;
            rootScope.$stateParams = stateParams;

            templateCache.put('header.html', '<!-- header -->');
        }
    ]);
});