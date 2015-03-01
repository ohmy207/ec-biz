define(['./module'], function(services) {
    'use strict';
    services.factory('Gallery', ['$resource', '$q',
        function($resource, $q) {
            var Gallery = $resource('http://suggestion.baidu.com/su?wd=:word&json=1', {
                cb: 'JSON_CALLBACK'
            }, {
                load: {
                    'method': 'JSONP'
                }
            });
            return {
                search: function(wd) {
                    var defer = $q.defer();
                    var params = {
                        word: wd
                    };
                    Gallery.load(params, function(resp) {
                        defer.resolve(resp);
                    }, function(resp) {
                        defer.reject(resp);
                    });

                    return defer.promise;
                },

                hot: function() {
                    var defer = $q.defer();
                    return defer.promise;
                }
            }
        }
    ]);
});