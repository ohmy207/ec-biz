var path = require('path');

module.exports = function() {
    return function(req, res, next) {
        var hasHTMLHeader = (req.headers.accept || []).indexOf('text/html') === 0;

        var isSlash = req.path.substring(req.path.length - 1) == '/';
        if (req.method == 'GET' && hasHTMLHeader && isSlash) {
            req.url = req.url + 'index.html';
        }
        next();
    };
};