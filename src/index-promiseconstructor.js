//Promise using Constructor pattern.
/**
 * if any code  which is already written using callback style
 * if you want to convert to promise, then you can go with Promise Constructors.
 *
 * Ajax- browser api for network calls.
 * fundamentally ajax is callback based
 * XMLHttpRequest- callback object.
 *
 * ajax libs;
 * jquery, fetch.js
 *
 */

//delay api with callback version
function delay(callback) {
	setTimeout(callback, 5000, 'Hello!Callback');
}

delay(res => {
	console.log(res);
});
//delay api with promise versoin
//you dont need to pass function as parameter
//you have to return promise object
//inside promise you have to write your async code.
function delayV2() {
	return new Promise((resolve, reject) => {
		//wrap existing callbacks inside promise,so other developer use only promise.
		setTimeout(resolve, 6000, 'Hello!Promise');
	});
}
delayV2()
	.then(res => console.log(res))
	.catch(err => console.log(err))
	.finally(() => console.log('done'));
