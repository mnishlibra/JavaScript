const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cart')

// Post cart 
router.post('/postCart',cartController.postCart)


module.exports = router