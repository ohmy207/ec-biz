/*
 * Copyright 2014 Alibaba Group, Inc. All rights reserved.
 *
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    2014/7/14
 * resp:    https://github.com/mycoin/quick-start/
 */
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        // Built-in web server
        connect: {
            options: {
                port: 8787,
                livereload: 35729
            },

            server: {
                options: {
                    base: '.',
                    middleware: function(connect, options, middleware) {
                        middleware.unshift(lessMiddleware);
                        return middleware;
                    }
                }
            }
        },

        // Watch the project.
        watch: {
            livereload: {
                options: {
                    livereload: 35729
                },

                files: [
                    '*.html',
                    'src/**/*.{js,css,less,html}'
                ]
            }
        }
    });

    function lessMiddleware(request, response, next) {
        var file = '.' + request._parsedUrl.pathname;
        if (request.url.indexOf('.css') > 0 && !grunt.file.exists(file)) {

            var src = file.replace('.css', '.less');
            var opt = {
                filename: src,
                compress: true
            };
            require('less').render(grunt.file.read(src), opt, function(e, output) {
                response.end(output.css);
            });
            return;
        }
        next();
    }

    grunt.registerTask('serve', [
        'connect:server',
        'watch'
    ]);
};