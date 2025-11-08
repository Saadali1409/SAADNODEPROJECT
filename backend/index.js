const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const adminRouter = require('./Routes/AdminRoute');
const userRoute =require('./Routes/UserRoute')
const productRoute =require ('./Routes/ProductRoute')
const paymentRoute =require ('./Routes/Payment')


mongoose.connect(process.env.DBCON).then(() => {
    console.log("MongoDB Database Established");

})
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/admin', adminRouter);
app.use('/user',userRoute)
app.use('/product', productRoute)
app.use('/api/payment', paymentRoute)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!!`);
})

