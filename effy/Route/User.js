const express = require('express');
const router = express.Router();
const userController = require('../Controllers/User')

router.get('/list-users',userController.getAllUsers)
router.get('/list-user/:id',userController.getUserById)
router.post('/create-user',userController.createUser)
router.post('/update-user/',userController.updateUser)
router.post('/deactivate-user/:id',userController.deactivateUser)
router.delete('/delete-user/:id',userController.deleteUser)

module.exports = router;