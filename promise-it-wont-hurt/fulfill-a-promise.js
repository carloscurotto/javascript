require('es6-promise');

'use strict';
    
var promise = new Promise(function (fulfill, reject) {
	fulfill();
});
    
setTimeout(function () {
  promise.then(function () {
  	console.log('FULFILLED!');
  });
}, 300);