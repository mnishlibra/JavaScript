const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'rootpassword', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
