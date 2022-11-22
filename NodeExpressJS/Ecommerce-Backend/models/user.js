const database = require('../util/database');
const Sequelize = require('sequelize');

const User = database.define('user' , 
{
    id:{
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true 
    },
    name: {
        type : Sequelize.STRING,
    },
    email : {
        type : Sequelize.STRING,
    }

})

module.exports = User ; 