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
                        $scope.today = function() { // 创建一个方法， 
                            $scope.dt = new Date(); // 定义一个属性来接收当天日期
                        };
                        $scope.today(); // 运行today方法
                        $scope.clear = function() { //当运行clear的时候将dt置为空
                            $scope.dt = null;
                        }
                        $scope.open = function($event) { // 创建open方法 。 下面默认行为并将opened 设为true
                            $event.preventDefault();
                            $event.stopPropagation();
                            $scope.opened = true;
                        }
                        $scope.disabled = function(date, mode) {
                            return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6))
                        }
                        $scope.toggleMin = function() {
                            $scope.minDate = $scope.minDate ? null : new Date(); //3元表达式，没啥好说的
                        };

                        $scope.toggleMin();
                        $scope.dateOptions = {
                            formatYear: 'yy',
                            startingDay: 1
                        }
                        $scope.formats = ['dd-MMMM-yyyy', 'yyy/MM/dd', 'dd.MM.yyyy', 'shortDate']; //日期显示格式 
                        $scope.format = $scope.formats[0]; // 将formats的第0项设为默认显示格式 


                        $scope.totalItems = 64;
                        $scope.currentPage = 4;

                        $scope.setPage = function(pageNo) {
                            $scope.currentPage = pageNo;
                        };

                        $scope.pageChanged = function() {
                            $log.log('Page changed to: ' + $scope.currentPage);
                        };

                        $scope.maxSize = 5;
                        $scope.bigTotalItems = 175;
                        $scope.bigCurrentPage = 1;
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