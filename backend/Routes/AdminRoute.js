const express = require('express');
const route = express.Router();
const AdminController = require('../Controllers/AdminController');

// --------------------- ROUTES ---------------------
// Admin Login
route.post('/adminlogin', AdminController.AdminLogin);

// Save product (upload middleware runs first)
route.post('/productsave', AdminController.Upload, AdminController.saveProduct);

// JWT Authentication
route.post('/jwt', AdminController.Auth);

// Fetch customer orders
route.get("/customerorder", AdminController.customerOrder);

module.exports = route;
