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

            urlRouterProvider.otherwise('/app/home');

            // use the HTML5 History API
            locationProvider.html5Mode(true);
        }
    ]);
});