const path = require('path');
const rootDir = require('../util/path');

const express = require('express');
const router = express.Router();    

const contacuscontrolloer =  require('../controllers/contactus') ;

router.get('/contactus', contacuscontrolloer.contactusController);

router.get('/success', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = router;
