/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    index.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */

define(function(require, exports, module) {
    var module = require('../module');

    module.config(['$stateProvider', function($stateProvider) {

        // app is an abstract controller.
        $stateProvider.state('app', {
            url: '/app',
            'abstract': true
        })

        .state('app.home', {
            url: '/home',
            views: {
                'screen': {
                    template: require('text!page/app/home.html'),
                    controller: function($scope) {
                        $scope.dateOptions = {
                            'year-format': "'yy'",
                            'starting-day': 1
                        };
                    }
                }
            }
        })

        .state('app.external', {
            url: '/external/{url:.*}',
            views: {
                'screen': {
                    controller: function($scope, $state, $stateParams, $rootScope) {
                        if (!$state.params.url) {
                            $state.go('app.external', {
                                url: 'https://www.tmall.com/'
                            });
                            return;
                        }

                        $rootScope.isCollapsed = true;
                        $scope.$on(
                            '$destroy',
                            function(event) {
                                $rootScope.isCollapsed = 0;
                            }
                        );
                        $scope.url = $stateParams.url;
                    }
                }
            }
        });
    }]);
});