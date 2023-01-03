const Sequelize = require('sequelize');

const sequelize = new Sequelize('effy', 'root', 'rootpassword', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
