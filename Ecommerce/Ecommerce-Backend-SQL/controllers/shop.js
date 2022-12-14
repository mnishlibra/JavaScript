const Product = require('../models/product');
const ITEMS_PER_PAGE = 2; 

exports.getProducts = (req, res, next) => {
  const page = req.query.page ;
  let totalItems; 
  Product.count()
  .then(numProducts => {
      totalItems = numProducts;
      return Product.findAll(
      {offset: (page -1) * ITEMS_PER_PAGE, limit: 2})
  })
  .then((products) => {
    res.status(200).json({
      products : products,
      currentPage : page,
      hasNextPage : ITEMS_PER_PAGE * page < totalItems,
      nextPage : parseInt(page) + 1 ,
      hasPreviousPage : page > 1,
      previousPage : page - 1,
      lastPage : Math.ceil(totalItems / ITEMS_PER_PAGE)
    })
  })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findAll({ where: { id: prodId } })
    .then(products => {
      res.render('shop/product-detail', {
        product: products[0],
        pageTitle: products[0].title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  const page = req.query.page ;
  let totalItems; 
  Product.count()
  .then(numProducts => {
      totalItems = numProducts;
      return Product.findAll(
      {offset: (page -1) * ITEMS_PER_PAGE, limit: 2})
  })
  .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        currentPage : page,
        hasNextPage : ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage : page > 1,
        nextPage : page + 1,
        previousPage : page - 1,
        lastPage : Math.ceil(totalItems / ITEMS_PER_PAGE)
      });
    })
  // .then((products) => {
  //   res.status(200).json({
  //     products : products,
  //     currentPage : page,
  //     hasNextPage : ITEMS_PER_PAGE * page < totalItems,
  //     nextPage : parseInt(page) + 1 ,
  //     hasPreviousPage : page > 1,
  //     previousPage : page - 1,
  //     lastPage : Math.ceil(totalItems / ITEMS_PER_PAGE)
  //   })
  // })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          // res.render('shop/cart', {
          //   path: '/cart',
          //   pageTitle: 'Your Cart',
          //   products: products
          // });
          res.status(200).send(products);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
      res.status(200).json({success : true , message :'successfully added the product'})
    })
    .catch(err => 
      res.status(500).json({success : false , message : ' Error Occured'})
    );
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  let orderId;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then(products => {
      return req.user
        .createOrder()
        .then(order => {
          orderId = order.id;
          return order.addProducts(
            products.map(product => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            })
          );
        })
        .then( () => {
          res.status(200).json({success : true , message :`Order sucessfully placed with order id = ${orderId}`})
        })
        .catch(err => console.log(err));
    })
    .then(result => {
      return fetchedCart.setProducts(null);
    })
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({include: ['products']})
    .then(orders => {
      // res.render('shop/orders', {
      //   path: '/orders',
      //   pageTitle: 'Your Orders',
      //   orders: orders
      // });
      res.json(orders);
    })
    .catch(err => console.log(err));
};
