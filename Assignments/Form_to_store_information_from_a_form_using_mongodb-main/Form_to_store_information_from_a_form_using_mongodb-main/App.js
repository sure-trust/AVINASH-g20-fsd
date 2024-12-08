//run the App.js file using node App.js and open localhost:3000/index.html
//Formusingmongodb>vApp.js
const express=require('express');
const app=express();
const mongoose=require('mongoose');
//MVC-Model View Control
//MVVM-Model View ViewModel
const bodyparser=require('body-parser');
const path=require('path');
const suggestions=require('./models/suggestions');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'view')));
mongoose.connect('mongodb://localhost:27017/Suggestion',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
app.post('/add-suggestion',async(req,res)=>{
    try{
        const {name,email,suggestion}=req.body;
        const rsuggestion=new suggestions({name,email,suggestion});
        await rsuggestion.save();
        res.send('Data saved in mongodb successfully');
    }catch(err){
        res.send('Error in saving data');  
    }
});
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
