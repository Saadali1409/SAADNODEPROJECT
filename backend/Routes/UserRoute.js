const express = require('express')
const route = express.Router();
const userController = require('../Controllers/UserController')


route.post('/userlogin', userController.userLogin);
route.post('/userregis', userController.userRegistration);
route.post('/userlogin', userController.userAuth);
route.get('/getuser', userController.getUser)



module.exports=route;