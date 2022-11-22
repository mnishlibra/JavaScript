const express = require('express')
const productController = require('../controllers/products')
const router = express.Router()

// get products
router.get('/getProducts', productController.getProducts)

module.exports= router;