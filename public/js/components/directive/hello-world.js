/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    bootstrap-switch.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
define(['angular', './module'], function(angular, module) {
	module.directive('helloWorld', function() {
		return {
			restrict: 'E',
			template: '<div>Hi there, hello World!</div>',
			replace: true
		};
	});
	// module.directive('repeater', function($document) {
	// 	return {
	// 		restrict: 'A',
	// 		compile: function(element, attrs) {
	// 			var template = $(element).children().clone();
	// 			for (var i = 0; i < attrs.repeater - 1; i++) {
	// 				$(element).append(template.clone());
	// 			}
	// 		}
	// 	};
	// });
});