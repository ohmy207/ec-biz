/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    index.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

// Inner dependent component set
define([
	'./config/auto',
	'./config/external',
	'./config/securty',
	'./config/router',

	'./main/index'
], function() {

	return {
		init: function(callback) {
			jQuery(callback);
		}
	};
});