/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    index.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

// Inner dependent component set
define(['require'], function(require) {

	//@TODO: automatic scanning, but exclude `module.js`, `index.js`

	// directive, filters
	require([
		'./directive/bootstrap-switch',
		'./directive/hello-world',
		'./directive/ng-scrollbar',

		'./filter/collection',
		'./filter/string'
	]);
});