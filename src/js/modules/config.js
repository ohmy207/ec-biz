/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    config.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';
define(
	[
		'require',
		'angular',

		'../config/router',
		'../config/securty'
	],
	function(require, angular, router, securty) {

		return function(app) {
			securty(app);
			router(app, '/app/home');
		};
	});