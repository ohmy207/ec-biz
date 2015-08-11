/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    home-controller.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

define(['angular', 'app', 'external!sl-off-rule'], function(angular, app, tpl) {
	app.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app.logout', {
				url: '/logout',
				views: {
					screen: {
						templateUrl: 'public/page/app/logout.html',
						controller: function($scope) {
							$scope.message = tpl;
						}
					}
				}
			});
	});
});