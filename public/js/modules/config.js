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

		'app',

		'../config/router',
		'../config/securty'
	],
	function(require, angular, app, router, securty) {

		securty(app);
		router(app, '/app/home');

		require([
			'./home/home-controller'
		]);
	});