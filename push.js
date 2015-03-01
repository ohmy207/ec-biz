var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

console.log('[git] commit and push.');
exec("git add --all && git commit -m update && git push", function(error, stdout, stderr) {
    console.log('[git] finish');
});
// 