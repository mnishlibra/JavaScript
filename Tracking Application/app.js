const express = require('express');
const cors = require('cors')
const app = express();
const sequelize = require('./util/database');
const port = 3000;
const routes = require('./route/route');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

sequelize
// .sync({force : true})
.sync()
.then((response) => {
    app.listen(port,console.log(`listening at port ${port}...`))
})
.catch((error) => {
    console.log(error)
})