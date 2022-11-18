const Sequelize = require('sequelize');
const database = require('../util/database');

const Product = database.define('product' , {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false 
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false 
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false 
    }
})


module.exports = Product ;