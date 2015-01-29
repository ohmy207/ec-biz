define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('HomeCtrl',['$scope', 'Galleries', function ($scope, Galleries) {
        $scope.res = {
            message: "Welcome Home!"
        },
        $scope.galleries = {};

        var loadData = function() {
            Galleries.search('works').then(function (resp) {
                $scope.galleries = resp;
            });
        }

        loadData();

        $scope.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    }]);
});