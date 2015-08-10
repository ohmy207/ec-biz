module.exports = function(connect, options, middleware) {

	var http = require('./filters/proxy');
	var less = require('./filters/less');

	console.log(options)

	middleware.unshift(function(request, response, next) {
		var url = request.url.substring(1);
		if (!/^(public|service|page|target)\//.test(url)) {
			request.url = options.index;
		}
		next();
	});
	middleware.unshift(less());
	// middleware.push(http());

	return middleware;
};