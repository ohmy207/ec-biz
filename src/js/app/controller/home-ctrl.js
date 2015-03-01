define(['./module'], function(module) {
    'use strict';

    module.controller('App.HomeCtrl', ['$scope', 'Gallery', '$stateParams',
        function($scope, Gallery, stateParams) {
            $scope.res = {
                message: "Welcome Home!"
            };
            console.log(stateParams);
            $scope.classes = [{
                "Name": "温度 ",
                "Options": ["Cold", "Hot", "Normal"]
            }, {
                "Name": "份量 ",
                "Options": ["Big", "Middle", "Small"]
            }];

            $scope.SelectdCollection = {};

            $scope.submit = function() {
                console.log($scope.SelectdCollection);
            };

            $scope.gallery = {};

            var loadData = function() {
                Gallery.search('works').then(function(resp) {
                    $scope.gallery = resp;
                });
            }

            loadData();

            $scope.alerts = [{
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            }, {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.'
            }];

            $scope.closeAlert = function(index) {
                console.log(index);
            };

            $scope.submit = function() {
                console.log($scope.SelectdCollection);
            }
        }
    ]);
});