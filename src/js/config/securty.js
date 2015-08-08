/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    securty.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

// global router config
define(['require', 'angular'], function(require, angular) {

	return function(app) {
		app.config(['$sceDelegateProvider',
			function(sceDelegateProvider) {
				sceDelegateProvider.resourceUrlWhitelist(
					['self', 'http://**', 'https://**', 'ws://**', 'wss://**']
				);
			}
		]);
	};
});