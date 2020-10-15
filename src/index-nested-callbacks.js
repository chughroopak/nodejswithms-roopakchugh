//nested function, function composition, callback nesting, callback chaining ...

const {log,err} = console;
// a function may return data, or error

const getUser = (resolve, reject) => {
	let user = {
		id: 1,
		name: 'admin'
	};
	if (user) {
		setTimeout(resolve, 1000, user);
	} else {
		setTimeout(reject, 1000, { messsage: 'User not found' });
	}
};

//login; login function will be only if getUser returns user data.
const login = (user,resolve,reject) => {
  //biz logic
  if(user.name === 'admin'){
    setTimeout(resolve,1000, {
      message:'LOGIN Success!'
    });
  } else {
    setTimeout(reject,1000, {
      'LOGIN failed'
    });
  }
}

const showpage = (status, resolve, reject) => {
  if(status.message === 'LOGIN Success!'){

  }
}

getUser(
	user => {
    log('get user is called');
    login(user, status=> {
      log('login is called');
      log(status);
    }, loginerror => error(loginerror))
  },
	err => error(err)
);
