const express = require('express');
const router = express.Router();
const userController = require('../controller/user')

router.post('/user',userController.getLoginUser)


module.exports = router;