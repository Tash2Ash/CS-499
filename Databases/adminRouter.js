//pull in dependencies
const express = require('express');
const debug = require('debug')('app:adminRouter');
const { MongoClient } = require('mongodb');
const animals = require('../data/animal.json');
const adminRouter = express.Router();

adminRouter.route('/')
    .get((req, res) => {
        //declare variables for mongo 
        const url = 'mongodb+srv://Tasha:<password>@graziososalvare.qixdeqr.mongodb.net/?retryWrites=true&w=majority';
        const dbName = 'graziososalvare';

        (async function mongo() {
            let client;//create client
            try {
                client = await MongoClient.connect(url); //connect to mongo
                debug('Connected to mongo');

                const db = client.db(dbName);
                //insert items from json into repo
                const response = await db.collection('animals').insertMany(animals);
                res.json(response);

            } catch (error) {
                debug(error.stack); //display any errors if app breaks
            }
            client.close();
        })();
    });

module.exports = adminRouter;