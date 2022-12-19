const express = require('express');
const router = express.Router();
const Authentication = require('../middleware/auth')
const Expense = require('../controller/expenses');


router.post('/user/expenses',Authentication.authenticate,Expense.postExpense);
router.get('/user/getexpenses',Authentication.authenticate ,Expense.getExpense);
router.delete('/deleteexpense/:id', Authentication.authenticate , Expense.deleteExpense);



module.exports = router;
