define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider) {

        //@see: https://github.com/angular-ui/ui-router/wiki#templates
        $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "app/page/tpl/layout.html",
            controller: 'AppCtrl'
        })

        .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "app/page/tpl/home.html",
                    controller: 'HomeCtrl'
                }
            }
        })

        .state('app.about', {
            url: "/about",
            views: {
                'menuContent': {
                    templateUrl: "app/page/tpl/about.html",
                    controller: 'AboutCtrl'
                }
            }
        });

        $urlRouterProvider.otherwise('/app/home');
    });
});