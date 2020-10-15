const CUSTOMERS = require('../mock-data/Customers');

class CustomerService {
	constructor() {}
	findAllV1(resolve, reject) {
		if (CUSTOMERS) {
			setTimeout(resolve, 2000, CUSTOMERS);
		} else {
			setTimeout(reject, 2000, 'Data not found');
		}
	}
	findAllV2() {
		return new Promise((resolve, reject) => {
			if (CUSTOMERS) {
				setTimeout(resolve, 2000, CUSTOMERS);
			} else {
				setTimeout(reject, 2000, 'Data not found');
			}
		});
	}
}

module.exports = CustomerService;
