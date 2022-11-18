const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const app = express()
const sequelize = require('./util/database');
const productRoutes = require('./routes/products')
const cartRoutes = require('./routes/cart')

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

app.use(productRoutes)
app.use(cartRoutes)

try {
    sequelize.authenticate();
    console.log('Database connection has been established successfully.');  
    sequelize
    // .sync({force : true})
    .sync()
    .then((result) => {
        // console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    }   
catch (error) {
    console.error('Unable to connect to the database:', error);
    }

