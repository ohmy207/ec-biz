/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    router.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

define(['jquery', 'require', 'angular', '../app', '../main/index'], function(jQuery, require, angular, app) {

	console.log('loader')

	app.run(['$rootScope', '$state', '$stateParams',
		function(rootScope, state, stateParams) {
			rootScope.$state = state;
			rootScope.$stateParams = stateParams;
		}
	])

	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$sceDelegateProvider',
		function(stateProvider, urlRouterProvider, locationProvider, sceDelegateProvider) {

			// config the sec
			sceDelegateProvider.resourceUrlWhitelist(
				['self', 'http://**', 'https://**', 'ws://**', 'wss://**']
			);
			stateProvider.decorator('views', function(state, parent) {
				var result = {};
				angular.forEach(parent(state), function(config, name) {
					if (!config.template && !config.templateUrl && !config.templateProvider) {
						var statePath = state.name.replace('.', '/');
						config.templateUrl = 'public/page/' + statePath + '.html';
					}
					result[name] = config;
				});

				return result;
			});

			// 404 router
			urlRouterProvider.otherwise(function($injector, $location) {
				return '/app/home';
			});

			// use the HTML5 History API
			locationProvider.html5Mode(true);
		}
	]);

	return {
		init: function(boot) {
			boot();
		}
	};
});