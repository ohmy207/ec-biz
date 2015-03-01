define(['./module'], function(module) {
    'use strict';

    var Controller = function(scope, Gallery, state, stateParams) {
        scope.messages = [{
            type: 'danger',
            msg: 'Oh snap! Change a few things up and try submitting again.'
        }, {
            type: 'success',
            msg: 'Well done! You successfully read this important alert message.'
        }];

        scope.close = function(index) {
            alert(index)
        };
    };

    // 注册到上下文
    module.controller('App.HomeCtrl', ['$scope', 'Gallery', '$state', '$stateParams', Controller]);
});