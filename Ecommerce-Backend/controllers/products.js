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

// exports.postAddProducts = (req,res,next) => {
//     const title = req.body.title;
//     const imageUrl = req.body.imageUrl;
//     const price = req.body.price;
//     const description = req.body.description;
//     Product.create({
//         title : title,
//         imageUrl : imageUrl,
//         price : price,
//         description : description
//     })
// }