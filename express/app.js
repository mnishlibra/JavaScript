const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname,'public')));

const errorController = require('./controllers/errorpage');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes   =      require('./routes/admin');
const shopRoutes    =       require('./routes/shop');
const contactRoutes =    require('./routes/contacts');
const errorpage404  =    require('./controllers/errorpage');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(errorController.errorpage);

app.listen(3000);
