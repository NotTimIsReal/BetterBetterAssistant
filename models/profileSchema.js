const mongoose=require('mongoose');
const profileSchema=new mongoose.Schema({
    userID:{type:String, require:true, unique:true},
    serverID:{type:String, require:true},
    coins:{type:Number, default:1500},
    bank:{type:Number},
})

const model=mongoose.model('profileModel', profileSchema);
module.exports=model;
