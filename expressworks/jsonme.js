var express = require('express');
var fs = require('fs');

var portNumber = process.argv[2];
var filePath = process.argv[3];

var app = express();

app.get('/books', function(req, res) {
	fs.readFile(filePath, function (err, buffer) {
		if (err) throw err;
		res.json(JSON.parse(buffer.toString()));
	});
});

app.listen(portNumber);