/*
 * Copyright 2014 Baidu Inc. All rights reserved.
 *
 * file:    index.js
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    {{date}}
 */
define([], function() {
    'use strict';
    return {
        transformRequest: function(type) {
            // I prepare the request data for the form post.
            function transformRequest(data, getHeaders) {
                var headers = getHeaders();
                headers['Accept'] = 'application/json, text/javascript, */*; q=0.01';
                headers['Content-Type'] = 'application/x-www-form-urlencoded;';
                headers['X-Requested-With'] = 'XMLHttpRequest';

                return serializeData(data);
            }

            // Return the factory value.
            return transformRequest;

            /* I serialize the given Object into a key-value pair string. This
             * method expects an object and will default to the toString() method.
             * --
             * NOTE: This is an atered version of the jQuery.param() method which
             * will serialize a data collection for Form posting.
             * --
             * https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
             */
            function serializeData(data) {
                var buffer = [];
                if (!angular.isObject(data)) {
                    return ((data == null) ? '' : data.toString());
                }
                for (var name in data) {
                    if (!data.hasOwnProperty(name)) {
                        continue;
                    }
                    var value = data[name];
                    buffer.push(
                        encodeURIComponent(name) +
                        '=' +
                        encodeURIComponent((value == null) ? '' : value)
                    );
                }
                return buffer.join('&').replace(/%20/g, '+');
            }
        }
    };
    // application.factory();
});