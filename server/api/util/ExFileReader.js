import fs from 'fs';

export default class {

	static readCsvFileAsJson(filePath) {
		const result = [];
		const csvArray = fs.readFileSync(filePath).toString().replace(/"/g, '').split('\n');
		const items = csvArray[0].split(',');
		for (let i = 1; i < csvArray.length - 1; i++) {
			let line = {};
			let data = csvArray[i].split(',');
			for (let j = 0; j < items.length; j++) {
				line[items[j]] = data[j];
			}
			result.push(line);
		}
		return result;
	}

	static readJsonFileAsJson(filePath) {
		return JSON.parse(fs.readFileSync(filePath, 'UTF-8'));
	}

	static readImageFileAsBase64(filePath) {
		return fs.readFileSync(filePath).toString('base64');
	}

}