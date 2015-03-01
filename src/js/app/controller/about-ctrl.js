define(['./module'], function(module) {
    'use strict';
    module.controller('AboutCtrl', ['$scope', 'Gallery',
        function($scope, Gallery) {
            $scope.res = {
                message: "About Us!"
            };
            $scope.data = {};
            $scope.wd = '百度';
            $scope.change = function($event) {

            };
            $scope.loadData = function() {
                Gallery.search($scope.wd).then(function(resp) {
                    $scope.data = resp;
                });
            };

            $scope.loadData();
        }
    ]);
});