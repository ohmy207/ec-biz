var less = require('./filters/less');

module.exports = function(connect, options, middle) {
    middle.unshift(function(request, response, next) {
        var url = request.url;
        if (!/^\/(public|service|page|target|favicon\.ico)/.test(url)) {
            request.url = options.index || '/index.html';
        }
        next();
    });
    middle.unshift(less());
    return middle;
};