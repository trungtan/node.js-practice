var http = require('http');
//https://www.npmjs.com/package/node-static
var static = require('node-static');
var file = new static.Server('./public');

var svr = http.createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
});
svr.listen(8080, '0.0.0.0');
console.log('Server running at http://0.0.0.0:8080/');
