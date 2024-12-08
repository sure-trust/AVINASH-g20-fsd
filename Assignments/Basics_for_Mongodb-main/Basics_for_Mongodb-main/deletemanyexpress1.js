const connectdb = require('./connection');

const update = async () => {
    let d = await connectdb();
    let data = await d.updateOne(
        { Name: 'Nithish' },
        { $set: { Age: 20 } }
    );
    console.log("Data updated successfully", data);
};

const deleteMany = async () => {
    let d = await connectdb();
    let result = await d.deleteMany({ Name: 'XYZ' });
    console.log("Data deleted successfully", result);
};

update();
deleteMany();
