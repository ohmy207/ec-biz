define(['angular', './app'], function(A, application) {
    'use strict';
    application.config(['$stateProvider', '$urlRouterProvider',
        function(stateProvider, urlRouterProvider) {

            stateProvider.decorator('views', function(state, parent) {
                var result = {},
                    views = parent(state);

                A.forEach(views, function(config, name) {
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
            urlRouterProvider.otherwise('/app/home');
        }
    ]);
});