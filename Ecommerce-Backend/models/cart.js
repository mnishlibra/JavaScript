const Sequelize = require('sequelize')
const database = require('../util/database')

const cart = database.define('cart', 
{
    id : {
        type : Sequelize.INTEGER,
        allowNull  : false,
        primaryKey : true
    },
    prodId : {
        type : Sequelize.INTEGER,
        allowNull : false,
    }
})

module.exports = cart ; 