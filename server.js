var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;


function invoker(group, param, context) {
    var caller;
    var next = function() {
        if (group.length) {
            group.shift().apply(context, (param || []).concat([next]));
        }
    };
    return next;
}

invoker([
    // 检查安装环境
    function(next) {
        if (!fs.existsSync('node_modules')) {
            console.log('[npm] install.');
            exec("npm install", function(error, stdout, stderr) {
                next();
            });
        } else {
            next();
        }
    },

    // 检查依赖包安装
    function(next) {
        if (!fs.existsSync('app/vendor')) {
            console.log('[npm] bower install.');
            exec("bower install", function(error, stdout, stderr) {
                next();
            });
        } else {
            next();
        }
    },
    function(next) {
        require('./lib/server');
        next();
    }
])();