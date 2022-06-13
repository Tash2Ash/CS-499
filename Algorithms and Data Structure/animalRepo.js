const { MongoClient, ObjectId } = require('mongodb');

function animalRepo() {
    //declare variables for mongodb
    const url = 'mongodb://localhost:27017';
    const dbName = 'animals';

    //return data, includes limit
    function get(query, limit){
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);//create new client
            try {
                //connect to database
                await client.connect();
                const db = client.db(dbName);

                //return all items in repo
                let items = db.collection('animalDetail').find(query);
                
                if(limit > 0 ){
                    items = items.limit(limit);
                }

                resolve(await items.toArray());
                client.close();
            }   catch (error) {
                reject(error);
            }
        });
    }

    //return data by id
    function getById(id) {
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);//create new client
            try {
                //connect to database
                await client.connect();
                const db = client.db(dbName);
                //return item by id
                const item = await db.collection('animalDetail').findOne({
                    _id: ObjectId(id)
                });
                resolve(item);
                client.close();
            }   catch (error) {
                reject(error);
            }
            });
    }

    //add new item to repository
    function add(item) {
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);//create new client
            try {
                //connect to database
                await client.connect();
                const db = client.db(dbName);
                //add item to database
                const addedItem = await db.collection('animalDetail').insertOne(item);

                resolve(addedItem.ops[0]);
                client.close();
            }   catch (error) {
                reject(error);
            }
        });
    }
    
    //update item by id
    function update(id, newItem) {
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);//create new client
            try {
                //connect to database
                await client.connect();
                const db = client.db(dbName);
                //update item in database
                const updatedItem = await db.collection('animalDetail').findOneAndReplace({_id: ObjectId(id)}, newItem, {returnOriginal:false});

                resolve(updatedItem.value);
                client.close();
            }   catch (error) {
                reject(error);
            }
        });
    }

    //delete item by id
    function remove(id) {
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);//create new client
            try {
                //connect to database
                await client.connect();
                const db = client.db(dbName);
                //delete item by id in database
                const removed = await db.collection('animalDetail').deleteOne({_id: ObjectId(id)});

                resolve(removed.deletedCount === 1);
                client.close();
            }   catch (error) {
                reject(error);
            }
        });
    }
    
    //load data, create database collection
    function loadData(data) {
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);//create new client
            try {
                //connect to database
                await client.connect();
                const db = client.db(dbName);
                //load data into repo
                results = await db.collection('animalDetail').insertMany(data);
                resolve(results);
                client.close();
            } catch (error) {
                reject(error)
            }
        })
    }

    //returns promise for each function
    return { loadData, get, getById, add, update, remove }

}

module.exports = animalRepo();