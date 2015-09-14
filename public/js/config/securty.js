/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    securty.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
define(['angular', './module'], function(angular, module) {
	module.config(['$sceDelegateProvider',
		function(sceDelegateProvider) {
			sceDelegateProvider.resourceUrlWhitelist(
				['self', 'http://**', 'https://**', 'ws://**', 'wss://**']
			);
		}
	]);
});