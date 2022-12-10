const { response } = require('express');
const express = require('express');
const { where } = require('sequelize');
const model = require('../model/user');

function isEmpty(str){
    if(str.length < 0){
        return true;
    }
    return false;
}

exports.postUser = ( async (req,res,next) => {
    
    try{
    const {name,email,password} = req.body;
    if(isEmpty(name) || isEmpty(email) || isEmpty(password)){
        res.status(400).json({success : 'All the Inputfields are Mandatory'});
    }

    await model.create(
        {name,email,password}
    ).then(
        res.status(201).json({success : 'User Created Successfully'})
    )}
    catch{
        res.status(50).json({success : 'Aah, Something is Wrong !'})
    }    
    
})