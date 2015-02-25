var http = require('follow-redirects').http;
module.exports = function() {
    return function(req, res, next) {

        var opt = {
            host: 'MacBook-Air.local:8800',
            path: req.path,
            method: req.method
        };

        http.request(opt, function(proxy) {
            proxy.headers['Access-Control-Allow-Origin'] = '*';
            proxy.headers['Access-Control-Allow-Headers'] = 'X-Requested-With'

            res.writeHead(proxy.statusCode, proxy.headers);

            // 复制结果
            proxy.on('data', function(chunk) {
                res.write(chunk);
            }).on('end', function() {
                res.end();
            })
        }).on('error', function(e) {
            res.writeHead(503);
            res.end();
        }).end();

    };
};