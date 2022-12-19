const express = require('express');
const router = express.Router();
const Authentication = require('../middleware/auth')
const User = require('../controller/user');

router.post('/user/signup',User.signUp);
router.post('/user/login' ,User.loginUser);

module.exports = router;