const { MongoClient } = require('mongodb'); // Corrected import
const url = 'mongodb://localhost:27017';
const database = 'SureTrust';
const client = new MongoClient(url);

const connectdb = async () => {
    try {
        await client.connect();
        const db = client.db(database);
        console.log("Connected to Database");
        return db.collection("Student");
    } catch (error) {
        console.error("Connection failed", error);
    }
};

module.exports = connectdb;
