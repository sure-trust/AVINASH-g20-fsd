const connectdb = require("./connection");
//Es is known as ECMAScript 
const deletedata=async ()=>{
    let data =await connectdb();
    let result =await data.deleteOne({name:'XYZ'});
    console.log("Data deleted successfully",result);

}
deletedata();