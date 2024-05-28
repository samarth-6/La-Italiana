const router=require('express').Router();
const User=require('../models/user.js');
const bcrypt = require('bcryptjs');

router.post('/register',async(req,res)=>{
    try{
        const {email,username,password}=req.body; 
        const saltRounds = 10;
        const hashpassword=bcrypt.hashSync(password,saltRounds);
        const user=new User({email,username,password:hashpassword});
       
        await user.save().then(()=>
            res.status(200).json({message:"SignUp Successfull"}))
    }catch(error){
        res.status(200).json(error.message);
    }
})
router.post('/signin',async(req,res)=>{
    try{
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
           return res.status(203).json({ message: "Please Sign Up first" });
        }
      const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
      if (!isPasswordCorrect) {
          return res.status(204).json({ message: "Password is incorrect" });
      }
      const { password, ...others } = user._doc;
        res.status(200).json({ user:others });
    }catch(error){
        console.error("Error in /signin:", error);
        res.status(500).json({message:"Internal Server Error"});
    }
})


module.exports=router;