const express = require('express');
const router = express.Router();
const companyController = require('../Controllers/Company')

router.post('/company', companyController.justTesting)


module.exports = router;