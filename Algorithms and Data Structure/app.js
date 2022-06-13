const MongoClient = require('mongodb').MongoClient;
//use assert to check for issues
const assert = require('assert');

//path to json file
const animalRepo = require('./repos/animalRepo');
const data = require('./animal.json');

//connect to mongodb
const url = 'mongodb://localhost:27017';
const dbName = 'animals';

//main function that handles CRUD
async function main() {
    const client = new MongoClient(url);
    await client.connect();

    try {
        //load data
        const results = await animalRepo.loadData(data);
        assert.equal(data.length, results.insertedCount);

        //return data
        const getData = await animalRepo.get();
        assert.equal(data.length, getData.length);

        //return data according to filter of breed
        const filterData = await animalRepo.get({ breed: getData[5].breed });
        assert.deepEqual(filterData[0], getData[5]);

        //testing limit, 5 returned docs
        const limitData = await animalRepo.get({}, 5);
        assert.equal(limitData.length, 5);

        //return data by id
        const id = getData[5]._id.toString();
        const byId = await animalRepo.getById(id);
        assert.deepEqual(byId, getData[5])

        //testing create function, adding new item
        const newItem = {
            "": 4,
            "age_upon_outcome": "9 months",
            "animal_id": "A733653",
            "animal_type": "Cat",
            "breed": "Siamese Mix",
            "color": "Grey",
            "date_of_birth": "2019-01-25",
            "datetime": "2019-08-27 18:11:00",
            "monthyear": "2019-08-27T18:11:00",
            "name": "Luna",
            "outcome_subtype": "",
            "outcome_type": "Adoption",
            "sex_upon_outcome": "Intact Female",
            "location_lat": 30.3188063374257,
            "location_long": -97.7240376703891,
            "age_upon_outcome_in_weeks": 30.8225198412500
        }
        const addedItem = await animalRepo.add(newItem);
        assert(addedItem._id)
        const addedItemQuery = await animalRepo.getById(addedItem._id);
        assert.deepEqual(addedItemQuery, newItem)

        //testing update on new item just added
        const updatedItem = await animalRepo.update(addedItem._id, {
            "": 4,
            "age_upon_outcome": "11 months",
            "animal_id": "A733653",
            "animal_type": "Cat",
            "breed": "Calico",
            "color": "White/Brown",
            "date_of_birth": "2019-01-25",
            "datetime": "2019-08-27 18:11:00",
            "monthyear": "2019-08-27T18:11:00",
            "name": "Luna",
            "outcome_subtype": "",
            "outcome_type": "Adoption",
            "sex_upon_outcome": "Intact Female",
            "location_lat": 30.3188063374257,
            "location_long": -97.7240376703891,
            "age_upon_outcome_in_weeks": 30.8225198412500

        });
        assert.equal(updatedItem.breed, "Calico");

        const newAddedItemQuery = await animalRepo.getById(addedItem._id);
        assert.equal(newAddedItemQuery.breed, "Calico");

        //delete item by id
        const removed = await animalRepo.remove(addedItem._id);
        assert(removed);
        const deletedItem = await animalRepo.getById(addedItem._id);
        assert.equal(deletedItem, null);
    }
    //return any errors that occur with execution
    catch (error) {
        console.log(error)
    } finally {
        const admin = client.db(dbName).admin();

        //use dropDatabase to clean up each time app is run
        //await client.db(dbName).dropDatabase();
        console.log(await admin.listDatabases());
        
        //close database connection
        client.close();
    }
}

main();