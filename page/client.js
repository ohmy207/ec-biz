var fs = require('fs');
var http = require('http');
var qs = require('querystring');

var content = qs.stringify({
    file: '/',
    type: 'change',
    data: fs.readFileSync('index.html', 'utf-8')
});

var opt = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '/data', 
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};

var req = http.request(opt, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('BODY: ' + chunk);
    });
    res.on('end', function() {
        console.log('OK');
    });

    res.on('error', function() {
        console.error('error');
    });
});

req.write(content);
req.end();