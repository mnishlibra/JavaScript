const User = require('../Models/User');
const Company = require('../Models/Company');

exports.getAllUsers = async (req,res,next) => {
    try{
        const user = await User.findAll()
        return res.status(200).json({'success' : true ,   user : user})
    } catch(err){
        console.log(err)
        return res.status(400).json({'success' : false , 'Message' : 'users not found' })
    }
}

exports.createUser = async (req,res,next) => {
    try{
        const {firstName,lastName,email,designation,dateOfBirth,isActive} = req.body;
        var activeOrNot = isActive ? 1 : 0;
        console.log(isActive,activeOrNot)
        await User.create({
            firstName : firstName,
            lastName : lastName,
            email : email,
            designation : designation,
            dob : dateOfBirth,
            active : activeOrNot
        }).then(
            res.status(201).send('User Values Recived')
        ).catch((error) => {
            res.status(400).send('User Values Not Recived')
            console.log(error)
        })
        }
        catch(err){
        console.log(err)
        }
}

exports.getUserById = async (req,res,next) => {
    const userId = req.params.id
    console.log(userId)
    try{
        const user = await User.findOne({
            where : {
                id : userId
            }
        })
        if(User === null){
            res.status(400).json({'success' : false , 'message' : 'User not Found' })
        }
        res.status(200).json({'success' : true , 'user' : user })
    }
    catch(err){
        console.log(err)
    }
}

exports.deactivateUser = async (req,res,next) => {
    const userId = req.params.id;

    await User.update({
        active : 0
    },
    {where : {id : userId}}).then(
        res.status(200).json({'success' : true , 'message' : 'User deactivated successfully'})
    ).catch(err => {
        console.log(err)
    })
}

exports.deleteUser = async (req,res,next) => {
    const userId = req.params.id;
    try{
        if(userId == null){
            return res.status(400),json({'success' : false , 'message' : 'user not found'})
        }
        await User.destroy({
            where : {
                id : userId
            }
        }).then(
            res.status(200).json({'success' : true , 'message' : 'user deleted successfully'})
        ).catch((err) => {
            console.log(err)
            res.status(400),json({'success' : false , 'message' : 'user not found'})
        })
    }catch {
        return res.status(400),json({'success' : false , 'message' : 'Something went wrong'})
    }
}

exports.updateUser = async (req,res,next) => {
    const userId = req.params.id
    try{
        if(req.body){
            const {firstName,lastName,email,designation,dateOfBirth,isActive} = req.body;
            var activeOrNot = isActive ? 1 : 0;
            await User.updateAttributes({
                firstName : firstName,
                lastName : lastName,
                email : email,
                designation : designation,
                dob : dateOfBirth,
                active : activeOrNot
            },{
                where : {
                    id : userId
                }
            }).then(
                res.send(201).json({'success' : true , 'message' : 'user updated successfully'})
            ).catch((err) => {
                console.log(err)
                res.send(201).json({'success' : false , 'message' : 'user not updated'})
            })
        }
    }catch(error){
        console.log(error)
    }
}