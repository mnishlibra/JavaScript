const { response } = require('express');
const model = require('../model/database');

exports.postDetails =  ((req,res,next) => {
    const id = req.params.id;
    const{amount,description,category} = req.body;
    if(id == 'null'){
        model.create(    
            {amount,description,category}
        ).then(
            response => res.json(response)
        ).catch(
            err => console.log(err)
        )
    }
    else{
        model.update(
            {amount,description,category} ,
            {where : {id : id}}
        )
    }
})

exports.getDetails = ((req,res,next) => {
    model.findAll()
    .then(response => {
        res.status(200).json({response})
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

exports.deleteDetails = async (req,res,next) => {
    try{
    const id = req.params.id;
    await model.destroy({where : {id:id}});
    res.sendStatus(202);
    }
    catch{
        err => {
            console.log(err);
        }
    }
};
