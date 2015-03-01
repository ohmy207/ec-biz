/*
 * Copyright 2014 Baidu Inc. All rights reserved.
 *
 * author:  mycoin (nqliujiangtao@gmail.com)
 * date:    2014/7/14
 * resp:    https://github.com/mycoin/quick-start/
 */
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // 配置信息
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Built-in web server
        'connect': {
            server: {
                options: {
                    port: 8828,
                    base: function() {
                        if (/release/.test(process.argv[3])) {
                            return 'www';
                        } else {
                            return 'src';
                        }
                    }(),
                    livereload: 35729,
                    middleware: function(connect, options, middleware) {
                        var fs = require('fs');
                        // inject a custom middleware into the array of default middleware
                        middleware.unshift(function(req, res, next) {
                            if (req.url == '/livereload') {
                                res.end('' + global.lastModified);
                            }
                            return next();
                        });
                        return middleware;
                    }
                }
            }
        },

        'watch': {
            options: {
                interval: 300,
                event: ['added', 'changed', 'deleted'],
                livereload: true,
                debounceDelay: 500
            },

            config: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            },

            'live': {
                options: {
                    livereload: 35729,
                },

                //刷新网页
                files: [
                    'src/*.html',
                    'src/style/**',
                    'src/script/**/*.js',
                    'src/page/*.html',

                    '!src/style/less/**',
                ],
                tasks: ['update']
            },

            'less': {
                files: [
                    'src/style/less/{,*/}*.less',
                ],

                // 顺序不能反
                tasks: ['clean:build', 'less:build']
            },

            'js': {
                files: [
                    'Gruntfile.js',
                    'src/script/**/*.js'
                ],
                tasks: ['jshint']
            },
        },

        // 先清理output目录
        'clean': {
            'build': {
                src: ['src/style/css/*.css']
            },

            'release': {
                src: [
                    'www/*',
                ]
            }
        },

        // 编译Less
        'less': {
            'build': {
                options: {
                    compress: false,
                    cleancss: false,
                    strictImports: false,

                    paths: [
                        'src/style/less',
                    ],
                    modifyVars: {
                        icon: '"../img/icon.png"',
                    }
                },

                files: {
                    'src/style/css/app.css': 'src/style/less/app.less'
                }
            }
        },

        // 压缩css
        'cssmin': {
            options: {
                banner: '/*Copyright 2014 Baidu Inc. All rights reserved.*/'
            },

            'release': {
                files: [{
                    expand: true,
                    cwd: 'src/style/css',
                    src: '**/*.css',
                    dest: 'www/style/css'
                }]
            }
        },

        'requirejs': {
            'release': {
                options: {
                    mainConfigFile: 'src/script/main.js',
                    name: 'main',
                    out: 'www/script/app.js',
                    preserveLicenseComments: false,
                    locale: false
                }
            }
        },

        // 验证JS 
        'jshint': {
            options: {
                'asi': true, // Missing semicolon.
                'bitwise': true,
                'boss': true,
                'browser': true,
                'curly': false,
                'eqeqeq': false,
                'eqnull': true,
                'esnext': true,
                'expr': true, // function call and instead saw an expression
                'latedef': false,
                'loopfunc': true,
                'newcap': true,
                'noarg': true,
                'node': true,
                'proto': true,
                'regexp': true,
                'strict': false,
                'sub': true,
                'undef': true,
                'unused': true,

                '-W124': false, // A generator function shall contain a yield statement
                '-W014': false, // Bad line breaking before ? (in tertiary operator)
                '-W065': false, // Missing radix parameter to parseInt (defaults to 10)
                '-W069': false, // Literal accessor is better written in dot notation
                'globals': {
                    'describe': true,
                    'require': true,
                    'define': true,
                    'exports': true,
                    'module': true,
                    'jQuery': true,
                    'console': true,
                    'it': true,
                    'CSRD': true,
                    'beforeEach': true,
                    'afterEach': true
                }
            },
            test: {
                files: {
                    src: [
                        'Gruntfile.js',
                        'src/script/**/*.js',
                    ]
                },
            }
        },

        // 压缩JS
        'uglify': {
            options: {
                mangle: {
                    except: ['jQuery', 'require', 'define']
                },
                banner: '/*Copyright 2014 Baidu Inc. All rights reserved.*/\n',
                footer: '\n/*last modify: <%=grunt.template.today("yyyy-mm-dd hh:MM:ss")%> */',
                report: 'gzip'
            },
            "release": {
                files: [{
                    expand: true,
                    cwd: 'src/vendors/require/',
                    src: [
                        'require.js'
                    ],
                    dest: 'www/script/'
                }]
            }
        },

        // 复制二进制
        'copy': {
            'release': {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: [
                        'config.xml',

                        'cordova_plugins.js',
                        'cordova.js',
                        'api/**',
                        'page/**',
                        'res/**',
                        'plugins/**',
                        'style/fonts/**',
                        'style/img/**',
                    ],
                    dest: 'www'
                }]
            },
        },

        'targethtml': {
            options: {
                curlyTags: {
                    version: '<%=pkg.version%>',
                    urlArgs: 'v=<%=grunt.template.today("yyyymmddHHMM")%>',
                    time: '<%=grunt.template.today("yyyy.mm.dd HH:MM")%>',
                }
            },

            'dist': {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: [
                        '*.html',
                    ],
                    dest: 'www'
                }]
            }
        },

        'htmlmin': {
            'release': {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'www',
                    src: [
                        '*.html',
                    ],
                    dest: 'www'
                }],
            }
        },

        // 同步到预览环境
        'rsync': {
            options: {
                args: [
                    '--times',

                    '--omit-dir-times',
                    '--compress',
                    '--verbose',
                    '--chmod=ug=rwX,o=rX',
                    '--human-readable'
                ],
                exclude: ['.edpproj', '.svn', 'Desktop.ini', 'Thumbs.db', '.DS_Store', '*.bak'],
                recursive: true
            },

            'deploy': {
                options: {
                    src: 'www/',
                    dest: '/Users/apple/work/www/vs-wise/'
                }
            }
        }
    });

    grunt.registerTask('default', function() {
        grunt.log.subhead('Please use one of the following commands:');

        grunt.log.writeln('• grunt server  启动静态服务器.');
        grunt.log.writeln('• grunt watch   监视源并自动编译.');
        grunt.log.writeln('• grunt build   基础编译.');
        grunt.log.writeln('• grunt release 压缩构建并打包.');
        grunt.log.writeln('• grunt deploy  自动部署 `RD` 环境');

        grunt.log.writeln('\n\nsee all tasks `grunt --verbose`');
    });
    grunt.registerTask('server', ['build', 'connect', 'watch']);
    grunt.registerTask('build', ['less']);
    grunt.registerTask('release', ['clean:release', 'build', 'cssmin', 'requirejs', 'uglify', 'targethtml', 'htmlmin:release', 'copy:release']);
    grunt.registerTask('deploy', [
        'release',
        'rsync'
    ]);

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('update', function() {
        global.lastModified++;
    });

    // 更新最后修改时间
    global.lastModified = global.lastModified || 1;
};