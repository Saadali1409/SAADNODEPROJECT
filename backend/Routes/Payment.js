const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const OrderModel = require('../Models/OrderModel')



// Creating Razorpay instance
const instance= new Razorpay({
  key_id:process.env.key_id,
  key_secret: process.env.KEY_SECRET,
});

//Creating Order

router.post("/orders", async (req, res) => {
  const { amount, products, name, city, address, pincode, email } = req.body;

  console.log("Received order request:",req.body)

  try {
    const orderInDb = await OrderModel.create({
      amount,
      products,
      clientname: name,
      city ,
      address,
      pincode,
      email,
    });

    // const instance = new Razorpay({
    //   key_id: process.env.KEY_ID,
    //   key_secret: process.env.KEY_SECRET,
    // });


                 // Create Razorpay order


    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };
    const order=await instance.orders.create(options);
    res.status(200).json({data:order}); 
  } catch (error) {
    console.error("Order creation failed:",error);  
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

//Verifying the payment
router.post("/verify", async (req, res) => {
  try {
    const { razorpay_orderID, razorpay_paymentID, razorpay_signature } =
      req.body;
    const sign = razorpay_orderID + "|" + razorpay_paymentID;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign)
      .digest("hex");

    if (razorpay_signature === expectedSignature) {
      return res.status(200).json({ message: "Payment verified successfully" });
    }
    else{
      return res.status(400).json({message:"Invalid signature"});
    }
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

module.exports = router;