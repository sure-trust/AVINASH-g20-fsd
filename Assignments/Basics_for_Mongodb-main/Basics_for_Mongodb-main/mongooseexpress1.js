const mongoose=require('mongoose');
const insert=async()=>{
    await mongoose.connect("mongodb://localhost:27017/SureTrust2");
    const userSchema=new mongoose.Schema({
        name:String,
        age:Number

    });
    const User=mongoose.model("User",userSchema);
    const user=new User({name:"Nithish",age:21});
    var a= await user.save();
    console.log(a);
};
insert();
