/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
'use strict';
define(['jquery'], function(jQuery) {

    var cmsCache = {};

    return {
        load: function(name, req, onLoad, config) {
            var conf = config.config.external || {
                domain: 'page.1688.com',
                enableCache: 1
            };

            jQuery.ajax({
                url: location.protocol + '//' + conf.domain + '/cmsinclude/' + name + '.html',
                dataType: 'jsonp',
                jsonpCallback: '_cms_vm_jsonp_callback_',
                success: function(data) {
                    cmsCache[data.code] = data.content;
                    onLoad(data.content);
                },
                error: function() {
                    onLoad(null);
                }
            });
        }
    };
});