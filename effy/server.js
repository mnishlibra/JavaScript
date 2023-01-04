const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
require('dotenv').config();
const server = express();
const port = process.env.PORT
const hostname = process.env.HOSTNAME

const User = require('./Models/User');
const Company = require('./Models/Company');

//Associations
User.belongsTo(Company)
User.hasOne(Company)

server.use(cors())

server.use(express.urlencoded({extended:true}));
server.use(bodyParser.json());

const userRoutes = require('./Route/User');
const companyRoutes = require('./Route/Company');

server.use(userRoutes);
server.use(companyRoutes);


sequelize
// .sync({force : true})
.sync()
.then(result => {
    // console.log(result) 
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
      });
})
.catch(err => {
    console.log(err)
})
  
  