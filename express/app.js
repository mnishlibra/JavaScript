const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.use((req,res,next) => {
    console.log('This is the first Middleware');
    next();
});

app.use((req,res,next) => {
    console.log('This is the second Middleware');
});

app.listen(port) ;