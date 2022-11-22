const Sequelize = require('sequelize')
const database = require('../util/database')

const cart = database.define('cart', 
{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true 
    }
})

module.exports = cart ; 