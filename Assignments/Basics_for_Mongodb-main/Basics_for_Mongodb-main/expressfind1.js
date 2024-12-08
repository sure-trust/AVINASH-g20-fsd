const connectdb = require('./connection');

const find1 = async () => {
    try {
        const data = await connectdb();
        if (data) {
            let r = await data.find().toArray();
            console.log(r);
        }
    } catch (error) {
        console.error("Error fetching data", error);
    }
};

find1();
