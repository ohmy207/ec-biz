/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    bootstrap-switch.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
define(['angular', './module'], function(angular, module) {

	/**
	 * AngularJS default filter with the following expression:
	 * "person in people | filter: {name: $select.search, age: $select.search}"
	 * performs a AND between 'name: $select.search' and 'age: $select.search'.
	 * We want to perform a OR.
	 */
	module.filter('match', function() {
		return function(items, props) {
			var out = [];

			if (angular.isArray(items)) {
				items.forEach(function(item) {
					var itemMatches = false;

					var keys = Object.keys(props);
					for (var i = 0; i < keys.length; i++) {
						var prop = keys[i];
						var text = props[prop].toLowerCase();
						if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
							itemMatches = true;
							break;
						}
					}
					if (itemMatches) {
						out.push(item);
					}
				});
			} else {

				// Let the output be the input untouched
				out = items;
			}
			return out;
		};
	});
});