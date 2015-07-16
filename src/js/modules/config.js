/*
 * Copyright 2014 Baidu Inc. All rights reserved.
 *
 * file:    config.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

// Program configuration entry
define(
	[
		'require',
		'angular',
		'../app',
		'../config/router'
	],
	function(require, angular, app, router) {
		app.config(['$sceDelegateProvider',
			function(sceDelegateProvider) {
				sceDelegateProvider.resourceUrlWhitelist(
					['self', 'http://**', 'https://**']
				);
			}
		]);
		router(app, '/app/home');
	});