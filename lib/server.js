var express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    less = require('less-middleware'),
    coffee = require('coffee-middleware'),
    indexes = require('serve-index'),
    php = require('./handlers/php'),
    ip = require('./util/ip'),
    proxy = require('./handlers/proxy');

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

// 模拟数据
app.use('/api', function(req, res) {
    var fs = require('fs');
    var resp = '' + fs.readFileSync('tool/api' + req.path);

    if (req.query.callback) {
        resp = req.query.callback + '(' + resp + ');';
    }
    res.send(resp);
});

// PHP支持
app.use(php());

// 本机资源
app.use(express.static('.'));

// 默认首页
app.use(indexes('.', {
    'icons': true,
    'view': 'details'
}));

// 代理请求
app.use(proxy('shili.1688.com'));

// 开启服务
app.listen(process.env.PORT || 8787);

// 打印日志
console.log('Server running at http://' + ip + ':8787/');