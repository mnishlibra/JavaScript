const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Company = sequelize.define('company', {
  companyName: {
    type: DataTypes.STRING,
  },
  companyAddress: {
    type: DataTypes.STRING,
  },
  coordinates : {
    type: DataTypes.STRING,
  }
});

module.exports = Company;
