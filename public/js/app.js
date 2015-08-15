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

    // load components, config and load the biz index file
    require('./components/index');
    require('./config/index');
    require('./biz/index');
});