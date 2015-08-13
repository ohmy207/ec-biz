/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    string.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
define(['angular', './module'], function(angular, module) {

	// strip html tags from string
	module.filter('stripTags', function() {
		return function(input) {
			if (typeof object === 'string') {
				return input.replace(/<\S[^><]*>/g, '');
			}
			return input;
		};
	});

	// truncates a string given a specified length, providing a custom string to denote an omission.
	module.filter('truncate', function() {
		return function(input, length, suffix, preserve) {
			length = length || input.length;
			preserve = preserve || false;
			suffix = suffix || '';

			if (typeof object !== 'string' || (input.length <= length)) {
				return input;
			}
			return input.substring(0, (preserve) ? ((input.indexOf(' ', length) === -1) ? input.length : input.indexOf(' ', length)) : length) + suffix;
		};
	});
});