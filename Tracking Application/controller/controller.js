const { response } = require('express');
const express = require('express');
const { where } = require('sequelize');
const model = require('../model/user');
const bcrypt = require('bcrypt');

function isEmpty(str){
    if(str.length < 0){
        return true;
    }
    return false;
}

exports.postNewUser = ( async (req,res,next) => {
    
    try{
    const {name,email,password} = req.body;
    if(isEmpty(name) || isEmpty(email) || isEmpty(password)){
        res.status(400).json({message : 'All the Inputfields are Mandatory'});
    }

    await model.create(
        {name,email,password}
    ).then(
        res.status(201).json({message : 'User Created Successfully'})
    )}
    catch{
        res.status(50).json({message : 'Aah, Something is Wrong !'})
    }    
    
})

exports.loginUser = ( async (req,res,next) => {
    const user = await model.findOne({ where : {email : req.body.email }});
    if(user){
        const password_valid = await model.findOne({
            where: {
                email : req.body.email,
            }
        })
        if(password_valid){
            return res.status(200).json({ message : 'User Logged in Successfully !'});
        }else {
            return res.status(401).json({ message : "User not authorized" });
          }
        return res.status(200).json({message : 'User found !'})
    }
    else{
        return res.status(404).json({ error : "User not found" });
    }
})