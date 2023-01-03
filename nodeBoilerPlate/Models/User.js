const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull : false 
  },
  lastName: {
    type: DataTypes.INTEGER,
    allowNull : false 
  },
  email : {
    type: DataTypes.STRING,
    allowNull : false,
    unique : true,
    primaryKey : true
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
    type : DataTypes.BOOLEAN,
    allowNull : false
  } 
});

console.log(User === sequelize.models.User);

module.exports = User;
