var fs = require('fs'),
    url = require('url'),
    util = require('../util');

module.exports = function(options) {
    return function(request, response, next) {
        var source = util.getResource(request);

        if (util.matchExt(source, '.css')) {
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
};