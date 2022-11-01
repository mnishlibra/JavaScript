const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname,'public')));

const adminRoutes   =    require('./routes/admin');
const shopRoutes    =    require('./routes/shop');
const contactRoutes =    require('./routes/contacts');
const errorpage404  =    require('./controllers/errorpage');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);    
app.use(contactRoutes);


app.use('/success', (req,res,next) => {
    res.send('<html><body><script>alert("Form successfuly filled")</script></body></html>')
})

app.use(errorpage404.errorpage);

app.listen(3000);