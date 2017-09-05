require('es6-promise');

'use strict';
    
var resolved = Promise.resolve('RESOLVED!');

var rejected = Promise.reject(new Error('REJECTED!'));

resolved.then(console.log);
rejected.catch(function (err) {
	console.log(err.message);
});