const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
  senderId: {
    type: Sequelize.INTEGER,
    defaultValue : 1
  },
  reciverId: {
    type: Sequelize.INTEGER,
    defaultValue : 2
  },
  dateAndTime : {
    type: Sequelize.DataTypes.DATE,
  }
});

module.exports = User;
