define(['./module'], function(module) {
    'use strict';
    module.controller('AppCtrl', ['$scope', '$location',
        function(scope, location) {
            scope.num = 'baidu.com'
            scope.isActive = function(viewLocation) {
                return location.path().indexOf(viewLocation) == 0;
            };
        }
    ]);
});