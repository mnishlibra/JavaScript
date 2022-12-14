const sequelize = require('sequelize');
const expense = require('../model/expense');

exports.postExpense =  ((req,res,next) => {
    
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
}
