/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    index.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';

// 内依赖组件集合
define(['require', 'angular'], function(require, angular) {

	//@TODO: 这里后期改成自动扫描

	// directive
	require([
		'./directive/bootstrap-switch',
		'./directive/hello-world',
		'./directive/ng-scrollbar'
	]);
});