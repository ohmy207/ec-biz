var fs = require('fs'),
	url = require('url');

module.exports = function(options) {
	return function(request, response, next) {
		var url = request.url.substring(1);
		if (!/^(public|service|page|target)\//.test(url)) {
			request.url = '/';
		}
		next();
	};
};