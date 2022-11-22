const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecomm','root','rootpassword' , {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;