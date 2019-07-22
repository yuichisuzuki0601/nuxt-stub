'use strict';
module.exports = (sequelize, DataTypes) => {
	const Emp = sequelize.define('Emp', {
		number: DataTypes.INTEGER,
		name: DataTypes.STRING,
		name_kana: DataTypes.STRING,
		sex: DataTypes.TINYINT,
		birthday: DataTypes.DATE,
		blood_type: DataTypes.STRING,
		zip_code: DataTypes.STRING,
		prefecture: DataTypes.STRING,
		city: DataTypes.STRING,
		address: DataTypes.STRING,
		phone: DataTypes.STRING,
		mobile: DataTypes.STRING,
		email: DataTypes.STRING,
		birth_place: DataTypes.STRING
	}, {
		underscored: true,
	});
	Emp.associate = function(models) {
		// associations can be defined here
	};
	return Emp;
};