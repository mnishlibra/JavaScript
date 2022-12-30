const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const Message = require('./models/message');
const User = require('./models/user');
const UserRoutes = require('./route/user');
const MessageRoutes = require('./route/message');
const cors = require('cors');
const app = express();

app.use(cors())

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(3000)

// Form association
User.hasMany(Message)
Message.belongsTo(User)

app.use(UserRoutes)
app.use(MessageRoutes)

sequelize
// .sync({force : true})
.sync()
.then(result => {
  // console.log(result) 
})
.catch(err => {
  console.log(err)
})

