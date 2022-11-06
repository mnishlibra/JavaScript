const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');
router.post('/details', controller.postDetails);
router.get('/get-details', controller.getDetails);
router.delete('/delete-details/:id', controller.deleteDetails)
module.exports = router;