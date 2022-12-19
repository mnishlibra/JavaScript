const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../model/user');

function generateAccessToken(id,name,isPremium){
    return jwt.sign( {userId : id , name : name , isPremium } ,'secretkey')
}

exports.signUp = ( async (req,res,next) => {
    
    try{
    const {name,email,password} = req.body;
    if (!(email && password && name)) {
        res.status(400).json({ message :  "All input are required"});
    }

    const oldUser = await user.findOne({ where : { email : email } });

    if (oldUser) {
      return res.status(409).json({ message : "User Already Exist. Please Login" });
    }

    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, async function(err, hash) {
        await user.create({
            name,email, password : hash
        }).then(
        res.status(201).json({message : 'User Created Successfully'})
        )
        })}
        
    catch{
        res.status(50).json({message : 'Aah, Something is Wrong !'})
    }    
})

exports.loginUser = ( async (req,res,next) => {

    const { email , password } = req.body

    if (!(email && password)) {
        res.status(400).json("All input are required");
    }

    user.findAll({where : {email}}).then((user) => {
        if(user.length > 0){
            const hash = user[0].password ;

            bcrypt.compare(password, hash, function(err, result) {
                console.log(result)
                if(result){
                    return res.status(200).json({ success : true , message : 'User Logged in Successfully' , token : generateAccessToken(user[0].id , user[0].name , user[0].isPremium)});
                }
                else {
                    return res.status(401).json({ success : false ,  message : "Password is incorrect" });
                }
            })
        }
        else{
            return res.status(404).json({ success : false , message : "User not found" });
        }
    })
})
