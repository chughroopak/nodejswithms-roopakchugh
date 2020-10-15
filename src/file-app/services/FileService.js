const fs = require('fs');

const options = {
	encoding: 'utf-8'
};

class FileService {
	filePath = './assets';
	constructor(filePath = 'users.json') {
		this.filePath = this.filePath + '/' + filePath;
	}
	readFile() {
		return new Promise((resolve, reject) => {
			fs.readFile(this.filePath, options, (err, data) => {
				if (err) {
					reject(err);
				}
				resolve(data);
			});
		});
	}
	writeFile(data) {
		return new Promise((resolve, reject) => {
			let jsonData = JSON.stringify(data);
			fs.writeFile(this.filePath, jsonData, options, err => {
				if (err) {
					reject(err);
				}
				resolve('file has been written');
			});
		});
	}
}
module.exports = FileService;
