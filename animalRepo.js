const { MongoClient } = require('mongodb');

function animalRepo() {
    const url = 'mongodb://localhost:27017';
    const dbName = 'animals';

    //load data into mongodb
    function loadData(data) {
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);//opem client
            try {
                await client.connect(); //connect to database
                const db = client.db(dbName);

                results = await db.collection('animalDetail').insertMany(data); //insert documents from json file and create collection
                resolve(results);

            } catch (error) {
                reject(error)
            }
        })
    }

    //return promise
    return { loadData }

}

module.exports = animalRepo();