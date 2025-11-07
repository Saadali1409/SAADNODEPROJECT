const express = require("express");
const route = express.Router();

const productController = require("../Controllers/ProductController");

route.get("/homepage", productController.homeDisplay);
route.get("/productdis", productController.productDisplay);
route.post("/search", productController.productSearch);


module.exports = route;