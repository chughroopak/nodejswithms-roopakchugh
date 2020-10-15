const EventEmitter = require('events');

//OrderService now can enable event driven programming model
/**
 * Steps
 * 1.inherit EventEmitter class with our domain class
 * 2.you have to write listener using on method
 * 3.have to write biz method, inside you can emit event.
 */

class OrderService extends EventEmitter {
	constructor() {
		super();
		//listener regeration ; event represents object having data .
		this.on('sales', event => {
			console.log(`Got ${event.orderId} ${event.qty} ${event.value}`);
		});
	}
	placeOrder(order) {
		//when ever place order is called, it can emit event
		setTimeout(() => {
			//async event driven programming
			this.emit('sales', order);
		}, 1000);
	}
}
//start
function startApp() {
	let orderService = new OrderService();
	//call biz api
	orderService.placeOrder({ orderId: 'OD001', qty: 100, value: 1000 });
}
startApp();
