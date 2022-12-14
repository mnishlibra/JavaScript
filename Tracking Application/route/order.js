const express = require('express');
const router = express.Router();
const Authentication = require('../middleware/auth');
const Order = require('../controller/purchase');

router.get('/createOrder', Authentication.authenticate , Order.createOrder);
router.post('/updatetransactionstatus', authenticatemiddleware.authenticate, purchaseController.updateTransactionStatus)

module.exports = router;