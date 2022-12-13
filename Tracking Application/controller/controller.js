const { response } = require('express');
const express = require('express');
const { where } = require('sequelize');
const expense = require('../model/expense');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../model/user');

function generateAccessToken(id,name) {
    return jwt.sign( {userId : id , name : name} ,'secretkey')
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
                    return res.status(200).json({ success : true , message : 'User Logged in Successfully' , token : generateAccessToken(user[0].id , user[0].name)});
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

exports.postExpense =  ((req,res,next) => {
;
    const{amount,description,category} = req.body;

        req.user.createExpense(    
            {amount,description,category,userId:req.user.id}
        ).then(
            response => res.json(response)
        ).catch(
            err => console.log(err)
        )
})

exports.getExpense = ((req,res,next) => {
    req.user.getExpenses()
    .then(response => {
        res.status(200).json({response})
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

exports.deleteExpense = async (req,res,next) => {
    try{
    const id = req.params.id;
    await expense.destroy({where : {
        id:id,
        userId:req.user.id
    }});
    res.sendStatus(202);
    }
    catch{
        err => {
            console.log(err);
        }
    }
};
