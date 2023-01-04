const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('User', {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull : false 
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull : false 
  },
  email : {
    type: DataTypes.STRING,
    allowNull : false,
    unique : true,
  },
  designation : {
    type : DataTypes.STRING,
    allowNull : false
  },
  dob : {
    type : DataTypes.DATE,
    allowNull : false
  },
  active : {
    type : DataTypes.TINYINT(1),
    allowNull : false
  } 
});

module.exports = User;
