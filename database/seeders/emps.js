'use strict';

const fs = require('fs');
const readCsvFileAsJson = (filePath) => {
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
};

module.exports = {
	up: (queryInterface, Sequelize) => {
		const data = readCsvFileAsJson('./test-data/emps.csv').map(d => {
			d.created_at = d.created_at === 'CURRENT_TIMESTAMP' ? new Date() : d.created_at;
			d.updated_at = d.updated_at === 'CURRENT_TIMESTAMP' ? new Date() : d.updated_at;
			return d;
		});
		return queryInterface.bulkInsert('emps', data, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('emps', null, {});
	}
};
