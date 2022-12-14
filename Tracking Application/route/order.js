const express = require('express');
const router = express.Router();
const Authentication = require('../middleware/auth');
const Order = require('../controller/purchase');

router.get('/createOrder', Authentication.authenticate , Order.createOrder);
router.post('/updateOrder', Authentication.authenticate, Order.updateOrder)

module.exports = router;