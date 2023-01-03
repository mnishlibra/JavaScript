const express = require('express');
const router = express.Router();
const userController = require('../Controllers/User')

router.post('/user', userController.justTesting)


module.exports = router;