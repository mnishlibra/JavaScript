const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const User = require('./model/user');
const Expense = require('./model/expense');
const Order = require('./model/order');

const userRoutes = require('./route/user');
const orderRoutes = require('./route/order');
const ExpenseRoutes = require('./route/expense');
const Premium = require('./route/premium');

const port = 3000;

dotenv.config();

//form associations 
User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

app.use(bodyParser.json());
app.use(cors());

app.use(userRoutes);
app.use(orderRoutes);
app.use(ExpenseRoutes);
app.use(Premium)

sequelize
// .sync({force : true})
.sync()
.then((response) => {
    app.listen(port,console.log(`listening at port ${port}...`))
})
.catch((error) => {
    console.log(error)
})