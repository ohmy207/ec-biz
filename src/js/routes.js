define(['app'], function(app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "src/page/tpl/menu.html",
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
        });

        $urlRouterProvider.otherwise('/app/about');
    });
});