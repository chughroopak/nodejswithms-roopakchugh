//non blocking programming ; using timer with data
const { log } = console;
const delay = handler => {
	let message = { id: 1, msg: 'Hello' };
	setTimeout(handler, 1000, message);
};

// delay(function () {
//     //code will be called after timeout event is triggered by kernel.
//     console.log('i am delayed message')
// })
delay(response => log(response));
