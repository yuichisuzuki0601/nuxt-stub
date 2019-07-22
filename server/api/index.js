import express from 'express';

// import models from '../../database/models';
import ExFileReader from './util/ExFileReader';

const app = express();

export const path = '/api/';
export const handler = app;

app.get('/greeting', (req, res) => {
	res.json({ msg: 'Hello World From Server !!' });
});

app.get('/emps', (req, res) => {
	(async () => {
		// const emps = await models.Emp.findAll().map(emp => emp.get()).filter(e => e.id <= 300);
		const emps = ExFileReader.readCsvFileAsJson('./database/test-data/emps.csv').filter(e => e.id <= 300);
		emps.forEach(emp => {
			const birthday = new Date(emp.birthday);
			const today = new Date();
			const thisYearBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());  
			const age = today.getFullYear() - birthday.getFullYear();
			emp.age = today < thisYearBirthday ? age - 1 : age;
		});
		emps.forEach(emp => {
			const randomNum = Math.floor(Math.random() * Math.floor(emp.age < 40 ? 10 : 5)) + 1;
			const fileName = (Number(emp.sex) === 1 ? 'm_' : 'f_') + Math.floor(emp.age / 10) * 10 + '_' + randomNum + '.png';
			emp.photo = '/images/emps/photo/' + fileName;
			// emp.photo = 'data:image/png;base64,' + ExFileReader.readImageFileAsBase64(`./data/emps/photo/${fileName}`);
		});
		const sortKey = req.query.sort;
		if (sortKey) {
			emps.sort((l, r) => l[sortKey] - r[sortKey]);
		}
		res.json(emps);
	})();
});