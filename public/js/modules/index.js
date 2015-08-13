/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * file:    index.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
'use strict';


// Inner dependent component set
define(['require', 'angular'], function(require, angular) {

	angular.module('appIndex', [
		'appConfig',
		'appFilter',
		'appDirective'
	]);
});