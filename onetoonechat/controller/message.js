const Message = require('../models/message');

exports.postMessage = async (req,res,next) => {
    const message = req.body.message;
    const userId = req.body.userId;
    console.log(message,userId);
    //Store the message in DB
    if(userId == 1){
        await Message.create({
            message : message,
            senderId : userId,
            reciverId : 2
        }).then(
        res.json({message: 'User 1 is Logged In!'})
        )
    }
    else if(userId == 2){
        await Message.create({
            message : message,
            senderId : userId,
            reciverId : 1
        }).then(
        res.json({message: 'User 2 is Logged In!'})
        )
    }
}

//Show all chat history
exports.getMessage = async(req,res,next) => {
    const id = req.params.id
    console.log(id)
    await Message.findAll({
        where : {
            senderId : id
        }
    })
    .then(message => {
        console.log(message)
        res.status(200).json({message})
    })
}

//Retrive Last message 
// exports.lastMessage = async(req,res,next) => {
//     await Message.findOne({
//         limit : 1,

//     })
// } 

//Count