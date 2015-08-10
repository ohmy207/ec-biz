module.exports = function(connect, options, middleware) {

    var remote = require('./filters/proxy');
    var less = require('./filters/less');

    middleware.unshift(function(req, resp, next) {
        if (req.url.indexOf('/app') == 0) {
            req.url = '/index.html';
        }
        next();
    });
    middleware.unshift(less(options));
    middleware.push(remote(options));

    return middleware;
};