var fs = require('fs'),
	url = require('url'),
	util = require('./util');

var less = require('./filters/less');

module.exports = function(connect, options, middleware) {
	middleware.unshift(function(request, response, next) {
		var url = request.url;
		if (!/^\/(public|service|page|target)\//.test(url)) {
			request.url = options.index;
		}
		next();
	});
	middleware.unshift(less());
	return middleware;
};