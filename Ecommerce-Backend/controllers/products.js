const Product = require('../models/products');

exports.getProducts = (req,res,next) => {
    Product.findAll()
    .then(products => {
        res.status(200).send(products)
    })
    .catch(err => {
        console.log(err)
    })
}
