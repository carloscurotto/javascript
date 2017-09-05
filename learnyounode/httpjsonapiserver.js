var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (request, response) {  
	response.writeHead(200, { 'Content-Type': 'application/json' });
	if (request.method == 'GET' && request.url.includes('/api/parsetime')) {
		var parsedUrl = url.parse(request.url, true);
		var dateValue = new Date(parsedUrl.query.iso);
		var jsonResponse = {"hour":dateValue.getHours(), "minute":dateValue.getMinutes(), "second":dateValue.getSeconds()};		
	} else if (request.method == 'GET' && request.url.includes('/api/unixtime')) {
		var parsedUrl = url.parse(request.url, true);
		var epocTime = (new Date(parsedUrl.query.iso)).getTime();
		var jsonResponse = {"unixtime":epocTime};
	}
	response.write(JSON.stringify(jsonResponse));
	response.end();
});  
server.listen(port);