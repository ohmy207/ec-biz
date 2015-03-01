var exec = require('child_process').exec;

console.log('[git] commit and push...');
exec("git add --all && git commit -m  \""+ process.argv[2] +"\" && git push", function(error, stdout, stderr) {
    console.log('[git] done.');
});