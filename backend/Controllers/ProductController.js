const productModel = require('../Models/ProductModel');



const homeDisplay = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(401).send("error :",error.message);
    }
};

const  productDisplay = async (req, res) => {
    const { id } = req.query
    const product = await productModel.findById(id);
    res.status(200).send(product);
}


const productSearch = async (req, res) => {


    const {search}= req.body;

    const proSearch = await productModel.find({
        $or: [
            { name: search.toUpperCase() },
            { category: search.toLowerCase() }
        ]})

    res.send(proSearch)
}

module.exports= {
    homeDisplay,
    productDisplay,
    productSearch,

};