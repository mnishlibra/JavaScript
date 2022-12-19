const express = require('express');
const router = express.Router();
const Order = require('../controller/purchase');

router.get('/Premium/showleaderboard' ,Order.createOrder);
router.post('/updateOrder', Authentication.authenticate, Order.updateOrder)

module.exports = router;