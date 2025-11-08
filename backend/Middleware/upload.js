// import { models } from "mongoose";
import {CloudinaryStorage} from "multer-strogr-cloudinary"
const cloudinary = request ("../cloudinary")
const multer = require ("multer");


const storage = new CloudinaryStorage ({
    cloudinary :cloudinary ,

    params :{
        folder : 'Projectuploads',
        format : async (req,file) => 'jpeg',
        public_id : async (req,file)=> Data.now() + '-' + file.originalname
    }
});

const upload = multer ({storage :storage}).array('images',10);

module.exports = upload;


