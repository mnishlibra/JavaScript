const User = require('../Models/User');
const Company = require('../Models/Company');

exports.justTesting = (req,res,next) => {
    res.status(200).send('Just Testing my connections')
}