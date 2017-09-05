require('es6-promise');

function alwaysThrows() {
	throw new Error("OH NOES");
};

function iterate(number) {
	console.log(number);
	return number + 1;
};

Promise.resolve(iterate(1)).then(iterate(2)).then(iterate(3)).then(iterate(4)).then(iterate(5)).
then(alwaysThrows()).
then(iterate(6)).then(iterate(7)).then(iterate(8)).then(iterate(9)).then(iterate(10)).
then(null, console.log);