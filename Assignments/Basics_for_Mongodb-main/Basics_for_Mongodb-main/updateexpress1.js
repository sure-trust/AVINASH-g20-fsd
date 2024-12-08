const connectdb = require('./connection');
const update = async ()=>{

    let d = await connectdb();
    let data = await d.updateOne({
        Name:'Nithish'}, {$set: {Age:20}});
        console.log("Data updated successfully",data);
    
}
update();