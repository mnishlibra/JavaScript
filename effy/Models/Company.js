const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Company = sequelize.define('company', {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  companyName : {
    type: DataTypes.STRING,
    allowNull : false 
  },
  companyAddress : {
    type: DataTypes.STRING,
    allowNull : false 
  },
  latitude : {
    type: DataTypes.STRING,
    allowNull : false,
    unique : true,
  },
  longitude : {
    type : DataTypes.STRING,
    allowNull : false
  }
});

module.exports = Company;
