const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.post('/user/login',controller.loginUser);
router.post('/user/signup',controller.postNewUser);
router.post('/user/expenses',controller.postExpense);
router.get('/user/getexpenses',controller.getExpense);
router.delete('/deleteexpense/:id', controller.deleteExpense);


module.exports = router;
