'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('emps', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			number: {
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			name_kana: {
				type: Sequelize.STRING
			},
			sex: {
				type: Sequelize.TINYINT
			},
			birthday: {
				type: Sequelize.DATE
			},
			blood_type: {
				type: Sequelize.STRING
			},
			zip_code: {
				type: Sequelize.STRING
			},
			prefecture: {
				type: Sequelize.STRING
			},
			city: {
				type: Sequelize.STRING
			},
			address: {
				type: Sequelize.STRING
			},
			phone: {
				type: Sequelize.STRING
			},
			mobile: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			birth_place: {
				type: Sequelize.STRING
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('emps');
	}
};