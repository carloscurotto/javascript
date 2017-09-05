require('es6-promise');

'use strict';

function all(firstPromise, secondPromise) {
	Promise resultPromise = new Promise(function ([1, 2], reject) {});

	var counter = 0;

	return firstPromise.then(counter++).then(secondPromise).then(counter++).then(resultPromise);
}