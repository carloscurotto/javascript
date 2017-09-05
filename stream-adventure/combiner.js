var combine = require('stream-combiner');
var through = require('through2');
var split = require('split');
var zlib = require('zlib');
    
module.exports = function () {
	// read newline-separated json
	var inputJSON = split();

	// group books into genres
	var groupByGenre = through(write, end);

	var currentGenre;
	var groupedByGenre = [];

	function write(line, _, next) {
		if (line.length === 0) return next();

		var row = JSON.parse(line);		

		console.log("Current Genre: " + currentGenre);

		if (row.type == 'genre' && row.type != currentGenre) {
			if (currentGenre) {
				console.log('published: ' + JSON.stringify(groupedByGenre[currentGenre]));
				this.push(JSON.stringify(groupedByGenre[currentGenre]) + '\n');
			}
			currentGenre = row.name;
			console.log("New Genre: " + currentGenre);
			groupedByGenre[currentGenre] = {"name":currentGenre, "books":[]};
		}

		if (row.type == 'book') {
			groupedByGenre[currentGenre].books.push(row.name);
		}

		next();
    };

    function end (next) {
		if (currentGenre) {
			console.log('published: ' + JSON.stringify(groupedByGenre[currentGenre]));
			this.push(JSON.stringify(groupedByGenre[currentGenre]) + '\n');
		}
		next();
    };

    // then gzip the output
    var gzipOutput = zlib.createGzip();

	return combine(inputJSON, groupByGenre, gzipOutput);
};
