const { start } = require('repl');
const FileService = require('./services/FileService');

const fileService = new FileService();

async function readOperation() {
	fileService.readFileV1(response => {
		console.log(response);
	});
	//
	fileService
		.readFileV2()
		.then(res => console.log(res))
		.catch(err => console.log(err));

	try {
		const fileData = await fileService.readFileV2();
		console.log(fileData);
	} catch (err) {
		console.log(err);
	}
}
async function writeOperation(data) {
	try {
		const status = await fileService.writeFile(data);
		console.log(status);
	} catch (err) {
		console.log(err);
	}
}

async function startApp() {
	//readOperation()
	writeOperation('Hello,Node io');
}
startApp();
