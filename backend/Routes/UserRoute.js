const express = require('express')
const route = express.Router();
const userController = require('../Controllers/UserController')

// Login with email/password
route.post('/userlogin', userController.userLogin);

// Register a new user
route.post('/userregis', userController.userRegistration);

// Token-based auth check — move this to a different route
route.post('/userlogin', userController.userAuth);

// Get user by ID
route.get('/getuser', userController.getUser)




//  agar koi dikkat aaye toh userverify ko userlogin kar dena
// route.post('/userverify', userController.userLogin);




module.exports=route;