const connectdb1 = require('./connection');
const insert= async()=>{
    const db = await connectdb1();
    // const result = await db.insertOne({name: 'Raju', age: 21 , Hobbies:'Swimming'});
    const result = await db.insertOne({name: 'XYZ', age: 19 , Hobbies:'Dancing'});
    if (result.acknowledged)
        console.log('Data inserted successfully');
}

insert();

