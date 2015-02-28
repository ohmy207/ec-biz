define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider) {

        //@see: https://github.com/angular-ui/ui-router/wiki#templates
        $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "src/page/tpl/layout.html",
            controller: 'AppCtrl'
        })

        .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "src/page/tpl/home.html",
                    controller: 'HomeCtrl'
                }
            }
        })

        .state('app.about', {
            url: "/about",
            views: {
                'menuContent': {
                    templateUrl: "src/page/tpl/about.html",
                    controller: 'AboutCtrl'
                }
            }
        })
        
        .state('app.io', {
            url: "/io",
            views: {
                'menuContent': {
                    templateProvider: function($timeout, $stateParams) {

                        console.log(arguments);
                        return $timeout(function() {
                            return '<h1>OK</h1>'
                        }, 10);
                    }
                }
            }
        });

        $urlRouterProvider.otherwise('/app/home');
    });
});