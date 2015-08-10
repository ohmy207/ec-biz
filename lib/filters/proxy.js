var fs = require('fs'),
    http = require('http');

module.exports = function() {

    return function(req, response, next) {
        var opt = {
            host: 'www.baidu.com',
            path: req.path,
            query: req.query,
            method: req.method
        };
        
        http.request(opt, function(proxy) {
            proxy.headers['Access-Control-Allow-Origin'] = '*';
            proxy.headers['Access-Control-Allow-Headers'] = 'X-Requested-With';

            response.writeHead(proxy.statusCode, proxy.headers);

            // 复制结果
            proxy.on('data', function(chunk) {
                response.write(chunk);
            });

            proxy.on('end', function() {
                response.end();
            });
        })

        .on('error', function(e) {
            next();
        })

        .end();
    };
};