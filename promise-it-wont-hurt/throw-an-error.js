require('es6-promise');

'use strict';

function parsePromised(toParse) {
	return new Promise(function (fulfill, reject) {
		try {
			var parsed = JSON.parse(toParse);
			fulfill(parsed);
		} catch (e) {
			reject(e);
		}
	});
};

parsePromised(process.argv[2]).then(null, console.log);