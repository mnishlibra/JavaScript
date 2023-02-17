import Sequelize from 'sequelize';

const sequelize = new Sequelize('segwitz', 'root', 'rootpassword', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
