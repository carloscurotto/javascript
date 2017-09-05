var express = require('express');

var portNumber = process.argv[2];

var app = express();

app.get('/search', function(req, res) {
	res.send(req.query);
});

app.listen(portNumber);