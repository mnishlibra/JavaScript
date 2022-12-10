const Sequlize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user',{
    id : {
        type : Sequlize.INTEGER,
        allowNull : false ,
        autoIncrement : true ,
        primaryKey : true
    },
    name : {
        type : Sequlize.STRING,
        allowNull : false 
    },
    email : {
        type : Sequlize.STRING,
        allowNull : false ,
        unique : true
    },
    password : {
        type : Sequlize.STRING,
        allowNull : false 
    }
})

module.exports = User


