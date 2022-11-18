const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const sequelize = require('./util/data');
const model = require('./model/database');
const router = require('./routes/router');

app.use(router);

sequelize
.sync()
.then(result =>{
    console.log(result);
    app.listen(8000);
})
.catch(err =>{
    console.log(err);
})