var fs = require('fs'),
    path = require('path'),
    url = require('url');

var root = path.resolve(__dirname, '..');

// 导出对象
module.exports = function(connect, options, middleware) {
    middleware.unshift(lessMiddleware);
    middleware.push(remoteMiddleware);

    return middleware;
};

function lessMiddleware(request, response, next) {
    var filename = url.parse(request.url).pathname;
    var source = path.join(root, filename);

    if (matchExt(source, '.css')) {
        var src = source.replace(/\.css$/i, '.less');

        if (fs.existsSync(src)) {
            var opt = {
                filename: src,
                compress: true
            };
            var content = fs.readFileSync(src);
            require('less').render(content.toString(), opt, function(e, output) {
                try {
                    response.setHeader('Content-Type', 'text/css');
                    response.end(output.css);
                } catch (e) {
                    next();
                }
            });
            return false;
        }
    }
    next();
}

function remoteMiddleware(req, response, next) {
    var opt = {
        host: 'www.baidu.com',
        path: req.path,
        query: req.query,
        method: req.method
    };

    require('http').request(opt, function(proxy) {
        proxy.headers['Access-Control-Allow-Origin'] = '*';
        proxy.headers['Access-Control-Allow-Headers'] = 'X-Requested-With'

        response.writeHead(proxy.statusCode, proxy.headers);

        // 复制结果
        proxy.on('data', function(chunk) {
            response.write(chunk);
        })

        .on('end', function() {
            response.end();
        });

    })

    .on('error', function(e) {
        next();
    })

    .end();
}

function matchExt(filename, ext) {
    if (filename.substring(filename.length - ext.length) == ext) {
        return true;
    } else {
        return false;
    }
}