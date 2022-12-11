const { response } = require('express');
const express = require('express');
const { where } = require('sequelize');
const user = require('../model/user');
const expense = require('../model/expense');
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

    const {email,password} = req.body;
    if(isEmpty(email) || isEmpty(password)){
        res.status(400).json({message : 'All the Inputfields are Mandatory'});
    }
    
    user.findAll({where : {email}}).then((user) => {
        if(user.length > 0){
            const hash = user[0].password ;
            bcrypt.compare(password, hash, function(err, result) {
                console.log(result)
                if(result){
                    return res.status(200).json({ success : true , message : 'User Logged in Successfully'});
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
    const{amount,description,category} = req.body;
    
        expense.create(    
            {amount,description,category}
        ).then(
            response => res.json(response)
        ).catch(
            err => console.log(err)
        )
})

exports.getExpense = ((req,res,next) => {
    expense.findAll()
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
    await expense.destroy({where : {id:id}});
    res.sendStatus(202);
    }
    catch{
        err => {
            console.log(err);
        }
    }
};
