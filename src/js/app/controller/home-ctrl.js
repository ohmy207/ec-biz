define(['./module'], function(module) {
    'use strict';
    module.controller('HomeCtrl', ['$scope', 'Gallery',
        function($scope, Gallery) {
            $scope.res = {
                message: "Welcome Home!"
            };

            $scope.classes = [
                {
                    "Name": "温度 ",
                    "Options": ["Cold", "Hot", "Normal"]
                },
                {
                    "Name": "份量 ",
                    "Options": ["Big", "Middle", "Small"]
                }
            ];

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
                $scope.alerts.push({
                    type: 'danger',
                    msg: 'Oh snap! Change a few things up and try submitting again.'
                });
            };

            $scope.submit = function() {
                console.log($scope.SelectdCollection);
            }
        }
    ]);
});