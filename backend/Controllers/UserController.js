
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
            
            const user = await userModel.findOne({email })
            
            if(!user){
               return  res.status(401).send({msg: "invalid user"})
            }
           const match=await bcrypt.compare(password,user.password)

           if(!match){
           return res.status(401).send({ msg: "invalid password" });
           }

           const token =  jwt.sign({id: user._id}, process.env.JWT_SECRET,{expiresIn: '30d'});
           
           
            res.status(200).send({msg: "Login successful!",
                token,
                data:user});
        } catch (error) {
            console.error(error);
            res.status(500).send({msg:"server error"});
            
        }
        
};
        //JWT Authentication

      const userAuth = async (req, res) => {
      const token = req.header("x-token");
      console.log(token);
            
         if(!token) return res.json(false);
    
    
      const verify = await jwt.verify(token, process.env.JWT_SECRET );
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