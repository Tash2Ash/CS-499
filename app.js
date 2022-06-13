//pull in mongo client for db access
const MongoClient = require('mongodb').MongoClient;

//pull load data function
const animalRepo = require('./repos/animalRepo');
//pull data from json file
const data = require('./animal.json');

//variables for db connection
const url = 'mongodb://localhost:27017';
const dbName = 'animals';

async function main () {
    const client = new MongoClient(url);//start new client
    await client.connect();//connect to db

    //load data into repo
    const results = await animalRepo.loadData(data);
    console.log(results.insertedCount, results.ops);
    const admin = client.db(dbName).admin();
    
    //return list of databases available
    console.log(await admin.listDatabases());
}

main();