const Sequelize = require('sequelize')
const database = require('../util/database')

const cartItem = database.define('cartItem', 
{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true 
    },
    quantity: Sequelize.INTEGER
})

module.exports = cartItem ; 