var express = require('express');
var stylus = require('stylus');
var path = require('path');

var portNumber = process.argv[2];

var app = express();
app.use(stylus.middleware(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'styles')));

app.listen(portNumber);
