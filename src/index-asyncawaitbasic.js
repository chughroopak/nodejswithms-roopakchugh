const { log } = console;

function getUser() {
	let user = 'admi';

	return new Promise((resolve, reject) => {
		if (user == 'admin') {
			setTimeout(resolve, 1000, 'Login Success');
		} else {
			setTimeout(reject, 1000, 'Login Failed');
		}
	});
}

async function startApp() {
	getUser()
		.then(response => log(response))
		.catch(err => log(err))
		.finally(() => log('done!!!'));

	try {
		const user = await getUser();
		log(user);
	} catch (err) {
		log(err);
	} finally {
		log('execution done');
	}
}

startApp();
