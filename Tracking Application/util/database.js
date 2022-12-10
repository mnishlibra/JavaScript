const Sequlize = require('sequelize');

const sequelize = new Sequlize('expensive','root','rootpassword', {
    host : 'localhost' ,
    dialect : 'mysql'
})

module.exports = sequelize ;