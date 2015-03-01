define(['./module'], function(module) {
    'use strict';
    module.controller('AppCtrl', ['$scope', '$location',
        function($scope, $location) {
            $scope.isActive = function(viewLocation) {
                return viewLocation === $location.path();
            };
        }
    ]);
});