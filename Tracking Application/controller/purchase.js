const Razorpay = require('razorpay');
const Order = require('../model/order');
const jwt = require('jsonwebtoken');

function generateAccessToken(id,name,isPremium){
    return jwt.sign( {userId : id , name : name , isPremium } ,'secretkey')
}

const createOrder  =async (req, res) => {
    try {
        var rzp = new Razorpay({
            key_id: 'rzp_test_uxQFYQpBNeWPQs',
            key_secret: 'xzl5DyEvCwSIcLYJIutVwFoX'
        })

        const amount = 2500;

        rzp.orders.create({amount, currency: "INR"}, (err, order) => {
            if(err) {
                throw new Error(err);
            }
            req.user.createOrder({ orderid: order.id, status: 'PENDING'}).then(() => {
                return res.status(201).json({ order, key_id : rzp.key_id});

            }).catch(err => {
                throw new Error(err)
            })
        })
    }
    catch(err){
        console.log(err);
        res.status(403).json({ message: 'Sometghing went wrong', error: err})
    }
}

 const updateOrder = (req, res ) => {
    try {
        const userId = req.user.id;
        const { payment_id, order_id} = req.body;
        Order.findOne({where : {orderid : order_id}}).then(order => {
            order.update({ paymentid: payment_id, status: 'SUCCESSFUL'}).then(() => {
                req.user.update({isPremium: true})
                return res.status(202).json({sucess: true, message: "Transaction Successful" , token : generateAccessToken(userId,undefined,true)});
            }).catch((err)=> {
                throw new Error(err);
            })
        }).catch(err => {
            throw new Error(err);
        })
    } catch (err) {
        console.log(err);
        res.status(403).json({ errpr: err, message: 'Sometghing went wrong' })

    }
}

module.exports = {
    createOrder,
    updateOrder
}