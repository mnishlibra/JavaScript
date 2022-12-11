const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.post('/user/signup',controller.postNewUser);
router.post('/user/login',controller.loginUser);
module.exports = router;
