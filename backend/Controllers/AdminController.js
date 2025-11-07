const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudnary = require('../cloudinary');
const jwt = require('jsonwebtoken');
const adminModel = require('../Models/AdminModel');
// const OrderModel = require('../Models/OrderModel');
const { response } = require('express');
const ProductModel = require('../Models/ProductModel');


// -------------------------------------------// MULTIPLE STROGE 

const storage = new CloudinaryStorage({
    cloudinary: cloudnary,
    params: {
        folder: 'projectuploads',
        format: async (req, file) => 'jpeg',
        public_id: async (req, file) => Date.now() + '-' + file.originalname
    }
});

const Upload = multer({ storage: storage }).array('image', 10);


// -------------------------------------- // ADMIN LogIn

const AdminLogin = async (req, res) => {

    const { adminId, password } = req.body;

    


    const admin = await adminModel.findOne({ adminId });
    
    if (!admin){
        return res.status (400).send ({msg:"invalid ID||"})
    }

    if (!admin.password !== password){
        return res.status (400).send ({msg:"invalid password||"})
    }

   return res.status(200).send({ admin ,msg: "Login Successful",})
}


//    -----------------------------------// JWT AUTHENTICATION 

const Auth =async (req, res) => {
    const token =req.header("x-token");
    console.log(token);

    if (!token)  return res.json(false);

    const verify = await jwt.verify(token, process.env.JWT);
    if (!verify) return res.json(false);
    console.log(verify);

    const user = await adminModel.findById(verify.id).select("password");
    res.send(user);
}

// Upload Product Images

const saveProduct =async (req, res) => {
    Upload (req, res, async (err) => {
        if (err) {
            return res
            .status(500)
            .send({ msg: "Image upload failed", error: err.message })
        }

       

        try {
           const imageURL = req.files.map(file => file.path);

            //  console.log(imageURL);

            const { name, description, price, category } = req.body;
            //  console.log(req.body);
            
            const Product = new ProductModel({
                name:name,
                description: description,
                price:price,
                category:category,
                images: imageURL,
                defaultimage: imageURL[0] // Set the first image as the default image
            });

            await Product.save();
             res.status(200).send("Product saved successfully" );
        } catch (error) {
            res.status(500).send( "Failed to save product" + error.message);

         
        }
    })
};



const customerOrder = async (req, res) => {

    const order = await OrderModel.find();
    console.log(order);
    req.status(200).send(order);
};



module.exports = {
    AdminLogin,
    saveProduct,
    Auth,
    customerOrder
};