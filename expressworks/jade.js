var express = require('express');
var path = require('path');

var portNumber = process.argv[2];

var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()});
});

app.listen(portNumber);
