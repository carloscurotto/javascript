var mymodule = require('./mymodule.js');

var directoryName = process.argv[2];
var extentionName = process.argv[3];

mymodule(directoryName, extentionName, function(err, fileNames) {
	if (err) {
		console.log(err);	
	}

	for (i = 0; i < fileNames.length; i++) {
		console.log(fileNames[i]);
	}

});