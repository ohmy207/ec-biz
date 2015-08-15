/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    index.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';


// Inner dependent component set
define(['require', 'angular'], function(require, angular) {

	return angular.module('app', [

		'ui.router',
		'ui.bootstrap',
		'ui.utils',

		'ngAnimate',
		'ngResource',
		'ngSanitize',
		'ngWebSocket',

		'appConfig',
		'appFilter',
		'appDirective'
	]);
});