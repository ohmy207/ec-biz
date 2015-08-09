module.exports = function(connect, options, middleware) {

    var remote = require('./filters/proxy');
    var less = require('./filters/less');

    middleware.unshift(less(options));
    // middleware.push(remote(options));

    return middleware;
};