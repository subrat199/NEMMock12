const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    company:{type:String,require:true},
    city:{type:String,require:true},
    location:{type:String,require:true},
    role:{type:String,require:true},
    level:{type:String,require:true},
    position:{type:String,require:true},
    language:{type:String,require:true},
    contract:{type:String,require:true},
    postedAt:{type:Date,require:true},
},{
    versionKey:false
})
const userModel=mongoose.model('User',userSchema)
module.exports={
    userModel
}