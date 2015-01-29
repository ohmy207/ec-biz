define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('HomeCtrl', ['$scope', 'Galleries',
        function($scope, Galleries) {
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
            window.e  =$scope
            $scope.submit = function() {
                console.log($scope.SelectdCollection);
            };

            $scope.galleries = {};

            var loadData = function() {
                Galleries.search('works').then(function(resp) {
                    $scope.galleries = resp;
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
                console .log($scope. SelectdCollection);
            }
        }
    ]);
});