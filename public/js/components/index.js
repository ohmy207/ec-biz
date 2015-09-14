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

    // directive, filters
	require('./directive/bootstrap-switch');
	require('./directive/hello-world');
	require('./directive/event');
	require('./directive/ng-scrollbar');
	
	require('./filter/collection');
	require('./filter/string');

});