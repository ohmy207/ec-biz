module.exports = function() {
    return function(request, response, next) {
        var isPHP = request.path.substring(request.path.length - 4) == '.php';
        if (isPHP) {
            var exec = require('child_process').exec;
            var docRoot = require('path').resolve('.');
            var host = (request.headers.host || '').split(':');
            var scriptName = request.path;

            var targetURL = request.url;
            var scriptFileName = require('path').normalize(
                docRoot + scriptName
            );
            var query = null;
            if (request.search) {
                query = require('url').parse(request.search).query;
            }

            var env = {
                PATH: process.env.PATH,
                GATEWAY_INTERFACE: 'CGI/1.1',
                SERVER_PROTOCOL: 'HTTP/1.1',
                SERVER_ROOT: docRoot,
                DOCUMENT_ROOT: docRoot,
                SERVER_NAME: host[0],
                SERVER_PORT: host[1] || 80,
                REDIRECT_STATUS: 200,
                SCRIPT_NAME: scriptName, //docroot上的文件
                REQUEST_URI: targetURL,
                SCRIPT_FILENAME: scriptFileName, //物理文件
                REQUEST_METHOD: request.method,
                QUERY_STRING: query || '',
                TRANSFER_ENCODING: 'Chunked'
            };

            // expose request headers
            for (var header in request.headers) {
                var name = 'HTTP_' + header.toUpperCase().replace(/-/g, '_');
                env[name] = request.headers[header];
            }

            if ('content-type' in request.headers) {
                env.CONTENT_TYPE = request.headers['content-type'];
            }

            var child = require('child_process').spawn(
                'php-cgi', [], {
                    env: env
                }
            );

            var bodyBuffer = [];
            var isBodyData = false;
            var headers = {};
            var line = [];

            child.on('exit', done);

            child.on('error', function() {
                return next();
            });
         
            child.stdout
                .on('end', done)
                .on('data', function(buf) {

                    for (var i = 0; i < buf.length; i++) {
                        // 如果是主体数据内容
                        if (isBodyData) {
                            return bodyBuffer.push(buf);
                        }

                        // 取出header
                        var c = buf[i];
                        if (c == 0xA) { // 如果是\n，则一行读取完毕
                            if (!line.length) { // 如果读取到一个空行
                                isBodyData = true;
                                bodyBuffer.push(buf.slice(i + 1));
                                return;
                            }

                            var s = line.join('');
                            line = [];
                            var idx = s.indexOf(':');

                            headers[s.slice(0, idx)] = s.slice(idx + 1).trim();
                        } else if (c != 0xD) { //如果不是\n，也不是\r，说明一行还未读取结束
                            line.push(String.fromCharCode(c));
                        }
                    }
                });

            // 将php解析后的结果填充到context中
            function done(code) {

                if (code === undefined) {
                    response.send('');
                }
                
                for (var i in headers) {
                    if (headers.hasOwnProperty(i)) {
                        response.header[i] = headers[i];
                    }
                }
                response.send(bodyBuffer.join(''));
            }
        } else {
            next();
        }
    }
}