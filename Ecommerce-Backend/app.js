const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const app = express()
const sequelize = require('./util/database');
const productRoutes = require('./routes/products')
const cartRoutes = require('./routes/cart')
const Product = require('./models/products');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

Product.belongsTo(User, {constraints: true , onDelete : 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem});
Product.belongsToMany(Cart, { through: CartItem});

app.use(productRoutes)

app.use((req,res,next) => {
    User.findByPk(1)
    .then((user) => {
        req.user = user;
        next();
    })
    .catch((error) => {
        console.log(error);
    })
})

try {
    sequelize
    .sync({force : true})    
    // .sync()
    .then((result) => {
        return User.findByPk(1);
    })
    .then((user) => {
        if(!user){
            User.create({name:'Manish' , email:'mnish.libra@gmail.com'})
        }
        return user; 
    })
    .then(
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    )
    .catch((error) => {
        console.log(error)
    })
    }
catch (error) {
    console.error('Unable to connect to the database:', error);
    }

