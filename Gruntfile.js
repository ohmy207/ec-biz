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

    var middleware = require('./lib/middleware');

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
                    index: '/index.html',
                    middleware: middleware
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
                    'public/{*,**}/*.{js,css,less,html}'
                ]
            },
            config: {
                files: ['Gruntfile.js', 'lib/{*,*/}*.js'],
                options: {
                    reload: true
                }
            },

            javascript: {
                files: [
                    'public/config.js',
                    'public/js/*.js',
                    'public/js/**/*.js'
                ],
                tasks: ['jshint']
            },
        },

        // Verify javascript
        jshint: {
            options: grunt.file.readJSON('.jshintrc'),
            test: {
                files: {
                    src: [
                        'public/config.js',
                        'public/js/*.js',
                        'public/js/**/*.js'
                    ]
                }
            }
        },

        requirejs: {
            compile: {
                options: {
                    name: 'main',
                    baseUrl: 'public/',
                    optimize: 'none',
                    mainConfigFile: 'public/main.js',
                    out: 'public/main-dist.js',
                    preserveLicenseComments: false
                }
            }
        }
    });

    grunt.registerTask('server', ['connect:server', 'watch']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', function() {
        grunt.log.subhead('Please use one of the following commands:');

        grunt.log.writeln('• grunt server  启动静态服务器.');
        grunt.log.writeln('• grunt build   基础编译.');
        grunt.log.writeln('• grunt test    代码正确性检测.');

        grunt.log.writeln('\n\nsee all tasks `grunt --verbose`');
    });

    grunt.registerTask('template', function() {

    });

};