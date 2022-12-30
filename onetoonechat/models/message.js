const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Message = sequelize.define('message', {
  message : {
    type: Sequelize.STRING
  },
  lastMsg : {
    type: Sequelize.STRING
  },
  senderId: {
    type: Sequelize.INTEGER,
  },
  reciverId: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Message;
