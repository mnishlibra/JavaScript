const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const middleware = require('../middleware/auth')

router.post('/user/signup',controller.signUp);
router.post('/user/login',controller.loginUser);
router.post('/user/expenses' ,middleware.authenticate ,controller.postExpense);
router.get('/user/getexpenses', middleware.authenticate ,controller.getExpense);
router.delete('/deleteexpense/:id', middleware.authenticate , controller.deleteExpense);


module.exports = router;
