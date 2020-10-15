const FileService = require('./services/FileService');

async function startApp() {
	const fileService = new FileService('users.json');
	const user = {
		id: 1,
		name: 'Roopak',
		streetAddress: '#114/B C-Block',
		city: 'Sirsa',
		state: 'Haryana',
		isActive: 'yes'
	};
	try {
		let status = await fileService.writeFile(user);
		console.log(status);
	} catch (err) {
		console.log(err);
	}
}

startApp();
