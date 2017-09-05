require('es6-promise');

'use strict';

function attachTitle(name) {
	return 'DR. ' + name;
}

var manhattan = Promise.resolve('MANHATTAN');

manhattan.then(attachTitle).then(console.log);