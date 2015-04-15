/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
define(['module', 'jquery'], function(module, jQuery) {
    'use strict';
    
    return {
        load: function(name, req, onLoad, config) {
            var opt = {
                url: config.baseUrl + name
            };
            jQuery.ajax(opt).always(function(content, state) {
                onLoad(state == 'success' ? content : null);
            });
        }
    };
});