/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    bootstrap-switch.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
define(['angular', './module'], function(angular, module) {
	module.directive('bootstrapSwitch', function() {
		return {
			restrict: 'A',
			scope: {
				sync: '=bootstrapSwitch'
			},
			link: function(scope, element, attrs) {
				angular.element(element).bootstrapSwitch();
				angular.element(element).on('switchChange.bootstrapSwitch', function(e, data) {
					scope.sync = data;
					scope.$apply();
				});
			}
		};
	});
});