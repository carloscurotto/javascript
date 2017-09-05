var through = require('through2');
var split = require('split');

var transform = through(write);

var lineCount = 1;

function write (buffer, encoding, next) {
	if (lineCount %2 == 0) {
		this.push(buffer.toString().toUpperCase() + '\n');
	} else {
		this.push(buffer.toString().toLowerCase() + '\n');
	}
	lineCount++;
    next();
}

process.stdin.pipe(split()).pipe(transform).pipe(process.stdout);