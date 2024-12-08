const mongoose=require('mongoose');
const rschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    suggestion:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('Suggestions',rschema);
