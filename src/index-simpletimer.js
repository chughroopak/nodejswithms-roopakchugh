// non blocking
const blockMe = message => console.log(message);

blockMe('start');
function delay(handler) {
	let message = {
		id: 1,
		msg: 'Hello'
	};
	setTimeout(handler, 1000, message);
}
blockMe('end');

delay(() => {
	//code will be called after timeout event is triggered by kernel
	console.log('I am a delayed message');
});
