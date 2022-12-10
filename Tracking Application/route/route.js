const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.post('/user',controller.postUser);
module.exports = router;
