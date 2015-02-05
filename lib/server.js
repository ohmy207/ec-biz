var express = require('express'),
    morgan = require('morgan'),
    less = require('less-middleware'),
    livereload = require('connect-livereload'),
    index = require('./mw/index-middleware'),
    proxy = require('./mw/http-proxy');

var app = new express();

// 记录日志
app.use(morgan('dev'));

// 编译样式
app.use(less('.'));

// 自动刷新
app.use(livereload({port: 7887}));

// 默认首页
app.use(index());

// 本机资源
app.use(express.static('.'));

// 代理请求
app.use(proxy());

// 开启服务
app.listen(process.env.PORT || 8787);

// 打印日志
console.log('Server running at http://127.0.0.1:8787/');