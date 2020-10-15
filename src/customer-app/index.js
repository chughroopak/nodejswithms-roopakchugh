const CustomerService = require('./services/CustomerService');

const { log } = console;

const customerService = new CustomerService();

async function startApp() {
	customerService.findAllV1(
		data => log(data),
		err => log(err)
	);

	customerService
		.findAllV2()
		.then(data => log(data))
		.catch(err => log(err))
		.finally(log('Done'));

	try {
		let data = await customerService.findAllV2();
		log(data);
	} catch (err) {
		log(err);
	} finally {
		log('Done');
	}
}
startApp();
