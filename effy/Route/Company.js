const express = require('express');
const router = express.Router();
const companyController = require('../Controllers/Company')

router.get('/list-companies',companyController.getAllCompanies)
router.get('/list-companies/:id',companyController.getCompaiesById)
router.post('/create-company',companyController.createCompany)
router.post('/update-company/:id',companyController.updateCompany)
router.post('/add-user-to-company',companyController.addUserToCompany)
router.delete('/remove-users-from-company',companyController.removeUserFromCompany)
router.delete('/delete-company/:id',companyController.deleteCompany)


module.exports = router;