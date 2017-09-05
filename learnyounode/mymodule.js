var fs = require('fs');
var path = require('path');

module.exports = function (directoryName, extentionName, callback) {
	fs.readdir(directoryName, function (err, fileNames) {
		if (err) {
			return callback(err, null);
		}

		var filteredFileNames = [];
		for (i = 0; i < fileNames.length; i++) {
			var fileName = fileNames[i];
			if (path.extname(fileName) == '.' + extentionName) {
				filteredFileNames.push(fileName);
			}
		}

		return callback(null, filteredFileNames);
	});	
}