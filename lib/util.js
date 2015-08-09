var fs = require('fs'),
	path = require('path'),
	url = require('url');

exports.matchExt = function(filename, ext) {
	if (filename.substring(filename.length - ext.length) == ext) {
		return true;
	} else {
		return false;
	}
};

exports.getRoot = function() {
	return path.resolve(__dirname, '..');
};

// 通过request对象获取文件路径
exports.getResource = function(request) {
	var pathName = url.parse(request.url).pathname;
	return this.getRoot() + pathName;
};