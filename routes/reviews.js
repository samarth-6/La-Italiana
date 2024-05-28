const router=require("express").Router();
const User=require('../models/user.js');
const List=require('../models/views.js');
//create
router.post('/addviews',async(req,res)=>{
    try{
    const {title,description,id}=req.body;
    const existingUser=await User.findById(id);
    if(existingUser){
        const list=new List({title,description,user:existingUser})
        await list.save().then(()=>res.status(200).json({list}));
        existingUser.list.push(list);
        existingUser.save();
    }
    }catch(error){
      console.log(error);
    }
})
//getTodo
router.get('/getviews/:id',async(req,res)=>{
    try {
 const list=await List.find({user:req.params.id}).sort({createdAt:-1}) 
 if (list.length !== 0) {
    res.status(200).json({ list });
} else{

    res.status(200).json({ message: "No tasks associated" });
 }
}catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
}
})
module.exports=router;