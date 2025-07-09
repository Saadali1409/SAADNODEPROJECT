const express = require('express');
const route = express.Router();
const AdminController = require('../Controllers/AdminController');

route.post('/adminlogin', AdminController.AdminLogin);


module.exports = route;