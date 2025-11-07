const express = require('express');
const route = express.Router();
const AdminController = require('../Controllers/AdminController');

route.post('/adminlogin', AdminController.AdminLogin);
route.post('/productsave', AdminController.saveProduct);
route.post('/jwt', AdminController.Auth);
route.get("/customerorder", AdminController.customerOrder);


module.exports = route;