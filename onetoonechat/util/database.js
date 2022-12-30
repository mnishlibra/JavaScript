const Sequelize = require('sequelize');

const sequelize = new Sequelize('chatApp', 'root', 'rootpassword', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
