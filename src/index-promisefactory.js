//Promise Object creations ;

//using factory methods

//return success result.

function getSuccessPromise() {
	//Return promise  object with 0 ms setTimeout
	return Promise.resolve('i am done');
}

function getFailurePromise() {
	//Return promise  object with 0 ms setTimeout
	return Promise.reject('something went wrong!!!');
}

//success /failure based on biz logic

function isActive(status) {
	if (status) {
		return Promise.resolve('Active');
	} else {
		return Promise.reject('In Active');
	}
}

function blockMe(message) {
	console.log(message);
}

// let mypromise = getSuccessPromise();
// mypromise.then(res => console.log(res));

// code refactoring  Promise is based on builder pattern , any api returns promise itself
//so we can call methods using chaining pattern.
// in java ; "hello".trim().toUppercase().trim().....

blockMe('start');
getSuccessPromise().then(res => console.log(res));

getFailurePromise().catch(err => console.log(err));

isActive(true)
	.then(res => console.log(res))
	.catch(err => console.log(err))
	.finally(() => console.log('done!!!!'));

isActive(false)
	.then(res => console.log(res))
	.catch(err => console.log(err))
	.finally(() => console.log('done!!!!'));

blockMe('end');
