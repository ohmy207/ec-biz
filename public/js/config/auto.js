/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    auto.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
// define(['angular', './module'], function(angular, module, template) {

// 	module.run(['$rootScope', '$state', '$stateParams', '$templateCache',
// 		function(rootScope, state, stateParams, templateCache) {
// 			rootScope.$state = state;
// 			rootScope.$stateParams = stateParams;

// 			for (var key in template) {
// 				if (template.hasOwnProperty(key)) {
// 					templateCache.put('public/page/' + key, template[key]);
// 				}
// 			}
// 		}
// 	]);
// });


define(['angular', './module'], function(angular, module) {

	module.run(['$rootScope', '$state', '$stateParams', '$templateCache',
		function(rootScope, state, stateParams, templateCache) {
			rootScope.$state = state;
			rootScope.$stateParams = stateParams;
		}
	]);
	
});