const Cart = require('../models/cart')


exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    console.log(prodId)
    try{
    Cart.create({id : prodId})
    }
    catch(err){
    console.log(err)
    }
    res.status(200).send({message : "success"})
    
    // let fetchedCart;
    // let newQuantity = 1;
    // req.user
    //   .getCart()
    //   .then(cart => {
    //     fetchedCart = cart;
    //     return cart.getProducts({ where: { id: prodId } });
    //   })
    //   .then(products => {
    //     let product;
    //     if (products.length > 0) {
    //       product = products[0];
    //     }
  
    //     if (product) {
    //       const oldQuantity = product.cartItem.quantity;
    //       newQuantity = oldQuantity + 1;
    //       return product;
    //     }
    //     return Product.findById(prodId);
    //   })
    //   .then(product => {
    //     return fetchedCart.addProduct(product, {
    //       through: { quantity: newQuantity }
    //     });
    //   })
    //   .then(() => {
    //     res.redirect('/cart');
    //   })
    //   .catch(err => console.log(err));
};


exports.getCart = (req, res, next) => {
    Cart.findAll()
    .then(cart => {
        res.status(200).send(cart)
    })
    .catch(err => {
        console.log(err)
    })
}