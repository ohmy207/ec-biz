var fs = require('fs'),
	url = require('url'),
	util = require('./util');

var less = require('./filters/less');

module.exports = function(connect, options, middle) {
	middle.unshift(function(request, response, next) {
		var url = request.url;
		if (!/^\/(public|service|page|target)\//.test(url)) {
			request.url = options.index;
		}
		next();
	});
	middle.unshift(less());
	return middle;
};