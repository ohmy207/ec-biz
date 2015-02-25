var fs = require('fs');
var path = require('path');

if (!fs.existsSync('node_modules')) {

    var ps = require('child_process').spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['install'], {
        stdio: 'inherit',
        cwd: __dirname
    });
    ps.on('data', function(data) {
        console.log(data);
    });
}

if (!fs.existsSync('app/vendor')) {
    var ps = require('child_process').spawn(process.platform === "win32" ? "bower.cmd" : "bower", ['install'], {
        stdio: 'inherit',
        cwd: __dirname
    });
    ps.on('data', function(data) {
        console.log(data);
    });
}

require('./lib/server');
