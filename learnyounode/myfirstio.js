var fs = require('fs');

var fileBuffer = fs.readFileSync(process.argv[2]);

var fileContent = fileBuffer.toString();

var quantityNewLines = fileContent.split('\n').length - 1;

console.log(quantityNewLines);