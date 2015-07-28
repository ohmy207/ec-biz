var path = require('path');
var fs = require('fs');
var url = require('url');
var http = require('http');
var querystring = require('querystring');

var execute = {
    change: function(data) {
        console.log(data);
    }
};

http.createServer(function(req, res) {
    var content = '';
    var uri = url.parse(req.url);

    // 收到数据
    req.addListener('data', function(thunk) {
        content += thunk;
    });

    // 请求完毕
    req.addListener('end', function() {
        if (req.method == 'POST') {
            var data = querystring.parse(content);
            var handle = execute[data.type];

            if (handle) {
                handle(data);
            } else {
                console.log('[ERROR] interface `' + data.type + '` not implemented.');
            }
            response(200, 'OK');
        } else if (req.method == 'GET') {
            switch (uri.pathname) {
                case '/ping':
                    response(200, 'OK');
                    break;
                case '/halt':
                    process.exit();
                    break;
                default:
                    response(404);
            }
        } else {
            response(501, 'Not Implemented', null);
        }
    });

    // 回填数据
    function response(status, statusInfo, data) {
        res.writeHead(status);
        res.write(JSON.stringify({
            status: status,
            statusInfo: statusInfo,
            data: data
        }));
        res.end();
    };


}).listen(3000);