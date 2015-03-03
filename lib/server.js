var express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    less = require('less-middleware'),
    livereload = require('connect-livereload'),
    coffee = require('coffee-middleware'),
    indexes = require('serve-index'),
    php = require('./mw/php'),
    proxy = require('./mw/http-proxy');

var app = new express();
var router = express.Router();

// 记录日志
app.use(morgan('dev'));

// 编译样式
app.use(less('.'));

// coffee支持
app.use(coffee({
    src: '.'
}));

// 自动刷新
// app.use(livereload({
//     port: 7887
// }));

// 模拟数据
app.use('/api', function(req, res) {
    var fs = require('fs');
    var resp = '' + fs.readFileSync('tool/api' + req.path);

    console.log(req.headers);


    if (req.query.callback) {
        resp = req.query.callback + '(' + resp + ');';
    }
    res.send(resp);
});

app.use(php());

// 本机资源
app.use(express.static('.'));

// 默认首页
app.use(indexes('.', {
    'icons': true,
    'view': 'details'
}));

// 代理请求
app.use(proxy());

// 开启服务
app.listen(process.env.PORT || 8787);

// 打印日志
console.log('Server running at http://127.0.0.1:8787/');