const connectdb1 = require('./connection');

const insert = async () => {
    try {
        const db = await connectdb1();
        const result = await db.insertMany([
            { Name: 'Yuvaraj', Age: 21, FavouriteColour: 'Pink' },
            { Name: 'Gowthami', Age: 21, Hobbies: 'Dancing' }
        ]);

        if (result.acknowledged) {
            console.log('Data inserted successfully');
        }
    } catch (error) {
        console.error('Error inserting data', error);
    }
};

insert();
