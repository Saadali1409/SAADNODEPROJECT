
const userModel = require('../Models/UserModel')
 const jwt=require('jsonwebtoken')
 const bcrypt=require('bcryptjs')

const userRegistration = async(req, res)=>{
    const { name, email, password, contact, address, city, pincode} = req.body
    
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
        
      try {
            const user = await userModel.create({
                name: name,
                email: email,
                password: hash,
                contact: contact,
                address: address,
                city:city,
                pincode:pincode
            })
                res.status(200).send("user created!!")
      } catch (error) {
            console.log(error);
            
      }
}

const userLogin=async(req, res)=>{
    const { email, password } = req.body
        //console.log(req.body);

        try {
            
            const user = await userModel.findOne({email: email})
            
            if(!user){
                res.status(401).send({msg: "invalid user"})
            }
           const match=await bcrypt.compare(req.body.password,user.password)

           if(!match){
            res.status(401).send({ msg: "invalid password" });
           }

           const token = await jwt.sign({id: user._id}, process.env.JWT,{expiresIn: '20days'});
           console.log(token);
           
            res.status(200).send({msg: "Login!",token:token,data:user})
        } catch (error) {
            console.log(error);
            
        }
        
}
        //JWT Authentication

      const userAuth = async (req, res) => {
      const token = req.header("x-token");
      console.log(token);
            
         if(!token) return res.json(false);
    
    
      const verify = await jwt.verify(token, process.env.JWT);
        if(!verify) return res.json(false)
      console.log(verify);
    
      const user = await adminModel.findById(verify.id).select("-password");
      res.send(user);
    };


    const getUser = async(req, res)=>{
        const User = await userModel.findById(req.query.userid);
        console.log(User);
        res.send(User)
        
    }
    
module.exports = {
  userLogin,
  userRegistration,
  userAuth,
  getUser
};    