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
                    middleware: require('./lib/middleware')
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

    grunt.registerTask('server', ['connect:server', 'watch']);
    grunt.registerTask('default', function() {
        grunt.log.subhead('Please use one of the following commands:');

        grunt.log.writeln('• grunt server  启动静态服务器.');
        grunt.log.writeln('• grunt watch   监视源并自动编译.');
        grunt.log.writeln('• grunt build   基础编译.');
        grunt.log.writeln('• grunt release 压缩构建并打包.');

        grunt.log.writeln('\n\nsee all tasks `grunt --verbose`');
    });

};