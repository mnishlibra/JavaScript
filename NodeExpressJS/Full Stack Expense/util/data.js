const  Sequelize  = require('sequelize')
const sequelize = new Sequelize('expensive','root', 'rootpassword',{
    dialect : 'mysql',
    host:'localhost'
});

module.exports = sequelize;