var fs = require('fs');
var path = require('path');

var directoryName = process.argv[2];
var extentionName = process.argv[3];

fs.readdir(directoryName, function (err, fileNames) {
	for (i = 0; i < fileNames.length; i++) {
		var fileName = fileNames[i];
		if (path.extname(fileName) == '.' + extentionName) {
			console.log(fileName);
		}
	}
});