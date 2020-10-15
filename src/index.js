const { log } = console;

const getUser = () => {
	//biz logic
	let user = {
		id: 1,
		name: 'admin'
	};
	//user=null;
	return new Promise((resolve, reject) => {
		if (user) {
			setTimeout(resolve, 1000, user);
		} else {
			setTimeout(reject, 1000, { message: 'User not found' });
		}
	});
};

//login; login function will be only if getUser returns user data.
const login = user => {
	//biz logic
	return new Promise((resolve, reject) => {
		if (user.name === 'admin') {
			setTimeout(resolve, 1000, { message: 'Login Success' });
		} else {
			setTimeout(reject, 1000, { message: 'login failed' });
		}
	});
};

const showpage = status => {
	//biz logic
	return new Promise((resolve, reject) => {
		if (status.message === 'Login Success') {
			setTimeout(resolve, 1000, { message: 'You are admin' });
		} else {
			setTimeout(reject, 1000, { message: 'You are guest' });
		}
	});
};

//nested promise chaining-v1
getUser()
	.then(user => {
		log('get user is called');
		login(user)
			.then(status => {
				log('login is called');
				showpage(status)
					.then(pageres => {
						log('show page is called');
						log(status);
					})
					.catch(pageerror => log(pageerror));
			})
			.catch(loginerr => log(loginerr));
	})
	.catch(err => {
		log(err);
	});
//.finally(() => log('done!!!'));

//code refactoring ; registring then outside methods-V2

getUser()
	.then(user => {
		log('get user is called');
		return login(user);
	})
	.then(status => {
		log('login is called');
		return showpage(status);
	})
	.then(page => {
		log('show page is called');
		log(page);
	})
	.catch(err => {
		log(err);
	});

//v3 simple code
getUser()
	.then(user => login(user))
	.then(status => showpage(status))
	.then(page => log(page))
	.catch(err => {
		log(err);
	});

async function startApp() {
	getUser()
		.then(user => login(user))
		.then(status => showpage(status))
		.then(page => log(page))
		.catch(err => {
			log(err);
		});

	try {
		const user = await getUser();
		const status = await login(user);
		const page = await showpage(status);
		log(`${user.name} ${status.message} ${page.message}`);
	} catch (err) {
		log(err);
	}
}
