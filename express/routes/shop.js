const express = require('express');
const router = express.Router();

router.get('/' , (req,res,next) => {
    res.send('<h1>I am Using express</h1>');
});

module.exports = router;