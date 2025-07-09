const adminModel = require('../Models/AdminModel');

const AdminLogin = async (req, res) => {

    const { adminId, password } = req.body;

    console.log(req.body);


    const admin = await adminModel.findOne({ adminId });
    console.log(admin);

    res.status(200).send({
        mag: "Login Successful",})
}

module.exports = {
    AdminLogin
};