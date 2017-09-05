var fs = require('fs');

var fileName = process.argv[2];

fs.readFile(fileName, function (err, buffer) {
	if (err) throw err;
  
	var fileContent = buffer.toString();
	console.log(fileContent.split('\n').length - 1);
});