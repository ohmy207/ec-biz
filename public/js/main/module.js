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

	var app = angular.module('app', [

		'ui.router',
		'ui.bootstrap',
		// 'ui.utils',

		'ngAnimate',
		'ngResource',
		'ngSanitize',
		'ngWebSocket',

		'appConfig',
		'appFilter',
		'appDirective'
	]);

	app.config(['$urlRouterProvider', '$locationProvider',
		function(urlRouterProvider, locationProvider) {
			urlRouterProvider.otherwise('/app/home');
			// locationProvider.html5Mode(true);
		}
	]);

	return app;
});