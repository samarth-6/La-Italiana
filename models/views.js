const mongoose=require('mongoose');
const viewsSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        reuired:true,
    },
    user:[{
        type:mongoose.Types.ObjectId,
        ref:"User",
    }],
    
},
{timestamps:true}
);
module.exports=mongoose.model("Views",viewsSchema)