const { Images } = require('lucide-react');
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    name :String,
    description :String,
    category :String,
    price :Number,
    image: [String],
    defaultimage: String,
})

module.exports = mongoose.model("Product", ProductSchema);