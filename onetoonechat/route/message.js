const express = require('express');
const router = express.Router();
const messageController = require('../controller/message');


router.post('/message',messageController.postMessage)
router.get('/getMessages/:id',messageController.getMessage)


module.exports = router;