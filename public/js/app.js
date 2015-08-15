/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    index.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

// Inner dependent component set
define(function(require, exports, module) {

	// load config and load the biz index file
	require('./config/auto');
	require('./config/external');
	require('./config/securty');
	require('./config/router');

	require('./biz/index');
});