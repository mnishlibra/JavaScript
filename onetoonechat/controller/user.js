const User = require('../models/user');
const message = require('../models/message');

exports.getLoginUser = (req,res,next) => {
    const user = req.body.senderId;
    if(!(user)) {
        res.json("All input are required");
    }
    if(user == 1){
        User.create({
            senderId : user,
            reciverId : 2,
            dateAndTime : new Date()
        }).then(
            res.json({message : 'You are Logged in as User one'})
        )
        res.send("Hey User Accepted")
        console.log(user)
    }
    else {
        User.create({
            senderId : user,
            reciverId : 1,
            dateAndTime : new Date()
        }).then(
            res.json({message : 'You are Logged in as User Two'})
        )
        res.send("Hey User Accepted")
        console.log(user)
    }

}