// ========================== IMPORTS ==========================
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudnary = require('../cloudinary'); // ✅ Correct cloudinary config
const jwt = require('jsonwebtoken');
const adminModel = require('../Models/AdminModel');
const ProductModel = require('../Models/ProductModel');
// const OrderModel = require('../Models/OrderModel'); // uncomment if using Orders

// ========================== CLOUDINARY STORAGE ==========================
// This tells multer where to store files (Cloudinary in this case)
const storage = new CloudinaryStorage({
    cloudinary: cloudnary, // ✅ our Cloudinary connection
    params: {
        folder: 'projectuploads', // folder name in Cloudinary
        format: async () => 'jpeg', // force all uploads to JPEG
        public_id: async (req, file) => Date.now() + '-' + file.originalname // unique name
    }
});

// Create multer upload middleware (max 10 images per request)
const Upload = multer({ storage: storage }).array('images', 10);





// ========================== ADMIN LOGIN ==========================
const AdminLogin = async (req, res) => {
    const { adminId, password } = req.body; // Get login details from request body
    console.log("Login request:", req.body);

    const admin = await adminModel.findOne({ adminId : adminId }); // Check if admin exists
    console.log("Found admin:", admin);

    if (!admin) {
        return res.status(400).send({ msg: "Invalid ID" });
    }

    // ❌ Your old code had: if (!admin.password !== password) — wrong check
    // ✅ Correct password check (no ! before admin.password)



    if (admin.password !== password) {
        return res.status(400).send({ msg: "Invalid password" });
    }

    // Create JWT token
    const token = jwt.sign(
        { id: admin._id },
        process.env.jwt_SECRET, // secret key from .env
        { expiresIn: '30days' } // token expiry
    );

     res.status(200).send({
        admin, token,
        msg: "Login Successfully!!",
        
    });
};

// ========================== JWT AUTH ==========================
const Auth = async (req, res) => {
    const token = req.header("x-token"); // token sent from frontend

    console.log( token);

    if (!token) return res.json(false);

    
        // Verify token
        const verify = await jwt.verify(token, process.env.jwt_SECRET);
        if (!verify) return res.json(false);
        console.log(verify);

        // Fetch user
        const user = await adminModel.findById(verify.id).select("password");
        res.send(user);
    
};

// ========================== SAVE PRODUCT ==========================
// This function only runs after Upload middleware has processed files
const saveProduct = async (req, res) => {
     Upload(req, res,async (err) => {
        if (err) {
            return res
            .status(500)
            .send({msg:"Error In Uploading Image", error: err.message});
        }
     })

    try {
        // Multer + Cloudinary gives array of uploaded files
        const imageURL = req.files.map((file) => file.path);

        const { name, description, price, category } = req.body;

        const Product = new ProductModel({
           name: name,
            description:description,
            price:price,
            category:category,
            images: imageURL,
            defaultimage: imageURL[0] // first image as main
        });

        await Product.save();
        res.status(200).send("Product saved successfully");
    } catch (error) {
        res.status(500).send("Failed to save product: " + error.message);
    }
};

// ========================== CUSTOMER ORDERS ==========================
const customerOrder = async (req, res) => {
    
  const orderr = await orderModel.find();
  console.log(orderr)
  res.status(200).send(orderr);
};


// Fetch all products
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("Failed to fetch products");
  }
};

// ========================== EXPORTS ==========================
module.exports = {
    AdminLogin,
    saveProduct,
    Auth,
    customerOrder,
    Upload, // ✅ exported so we can use in route

      getAllProducts // <-- added
};
