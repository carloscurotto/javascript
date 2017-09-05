var http = require('http');
var concatStream = require('concat-stream');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url3, function(response) {
	let rawData3 = '';
	response.on('data', (chunk3) => rawData3 += chunk3);
	response.on('end', () => {
		http.get(url2, function(response) {
			let rawData2 = '';
			response.on('data', (chunk2) => rawData2 += chunk2);
			response.on('end', () => {
				http.get(url1, function(response) {
					let rawData1 = '';
					response.on('data', (chunk1) => rawData1 += chunk1);
					response.on('end', () => {
						console.log(rawData1);
						console.log(rawData2);
						console.log(rawData3);
					});
				});
			});
		});
	});
});