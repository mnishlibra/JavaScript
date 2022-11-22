const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cart')

// Post cart request
router.post('/postCart',cartController.postCart)

// Get cart request 
router.get('/getCart', cartController.getCart)

module.exports = router