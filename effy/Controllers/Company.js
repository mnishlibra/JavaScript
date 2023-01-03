const User = require('../Models/User');
const Company = require('../Models/Company');

exports.createCompany = async (req,res,next) => {
    try{
        const {companyName , companyAddress , latitude , longitude} = req.body ;
        console.log(companyName , companyAddress , latitude , longitude)

        await Company.create({
            companyName : companyName,
            companyAddress : companyAddress,
            latitude : latitude,
            longitude : longitude
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }catch(err){
        console.log(err)
    }
}

exports.getAllCompanies = async (req,res,next) => {
    try{
        const companies = await Company.findAll()
        return res.status(200).json({'success' : true ,  'Message' : companies})
    }catch(err){
        console.log(err)
        return res.status(400).json({'success' : false , 'Message' : 'Companies not found' })
    }
}

exports.getCompaiesById = async (req,res,next) => {
    const Id = req.params.id
    console.log(Id)
    try{
        const company = await Company.findOne({
            where : {
                id : Id
            }
        })
        if(Id == null){
            res.status(400).json({'success' : false , 'message' : 'No company found , Bad Request'})
        }
        res.status(200).json({'success' : true , 'company' : company})
    }catch(error){
        console.log(error)
    }
}

exports.deleteCompany = async (req,res,next) => {
    const Id = req.params.id
    console.log(Id)
    try{
        if(Id == null){
            return res.status(400).json({'success' : false , 'message' : 'Bad Request'})
        }
        await Company.destroy({
            where : {
                id : Id
            }
        }).then(
            res.status(200).json({'success' : true , 'message' : 'company deleted successfully'})
        ).catch((err) => {
            console.log(err)
            res.status(400),json({'success' : false , 'message' : 'company not deleted'})
        })
    }catch(err){
        console.log(err)
        res.status(400),json({'success' : false , 'message' : 'company not found'})
    }
}

exports.updateCompany = async (req,res,next) => {
    
}

exports.addUserToCompany = async (req,res,next) => {

}

exports.removeUserFromCompany = async (req,res,next) => {
    
}