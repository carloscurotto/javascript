var trumpet = require('trumpet');
var through = require('through2');

var transform = through(write);
var trumpet = trumpet();

function write (buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
    next();
}

var loudStream = trumpet.select('.loud').createStream();
loudStream.pipe(transform).pipe(loudStream);

process.stdin.pipe(trumpet).pipe(process.stdout);