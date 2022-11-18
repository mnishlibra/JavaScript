const Sequelize = require('sequelize');
const sequelize = require('../util/data');
const Expense = sequelize.define('expenses',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Expense ; 
