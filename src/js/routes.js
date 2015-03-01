define(['./app'], function(application) {
    'use strict';
    return application.config(function($stateProvider, $urlRouterProvider) {

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
        });
        console.debug('[routers.js] routers');

        $urlRouterProvider.otherwise('/app/home');
    });
});