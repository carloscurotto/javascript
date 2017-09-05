var http = require('http');
var concatStream = require('concat-stream');

var url = process.argv[2];

http.get(url, function(response) {	
	response.pipe(concatStream(function (data) {
		var content = data.toString();
		console.log(content.length);
		console.log(content);
	}));
});