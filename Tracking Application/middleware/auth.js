const jwt = require('jsonwebtoken');
const User = require('../model/user');
const { use } = require('../route/expense');

exports.authenticate = (req,res,next) => {

    try {
        const token = req.header('Authorization');
        const user = jwt.verify(token, 'secretkey');
        User.findByPk(user.userId).then(user => {
            req.user = user;
            next();
        })
    }
    
    catch {
        (err) => {
            console.log(err);
        }
    }
}

