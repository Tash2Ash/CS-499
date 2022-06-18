//pull in dependencies
const express = require('express');
const debug = require('debug')('app:animalsRouter');
const { MongoClient, ObjectId } = require('mongodb');
const animals = require('../data/animal.json');
const animalsRouter = express.Router();

animalsRouter.use((req, res, next) => {
    if (req.user) {//can add user."admin/user" etc for different profiles
        next();
    } else {
        res.redirect('/auth/signIn');
    }
});

//render animals page with all animals in repo
animalsRouter.route('/')
    .get((req, res) => {
        //variables for database
        const url = 'mongodb+srv://Tasha:<password>@graziososalvare.qixdeqr.mongodb.net/?retryWrites=true&w=majority';
        const dbName = 'graziososalvare';

        (async function mongo() {
            let client;//create client
            try {
                client = await MongoClient.connect(url); //connect to mongo
                debug('Connected to mongo');

                const db = client.db(dbName);

                const animals = await db.collection('animals').find().toArray();
                //return all animals in repo
                res.render('animals', { animals });

            } catch (error) {
                debug(error.stack); //display any errors if app breaks
            }
            client.close();
        })();
    });

//render page with only selected animal by id
animalsRouter.route('/:id')
    .get((req, res) => {
        //variables for database
        const id = req.params.id;
        const url = 'mongodb+srv://Tasha:Centralperk2@graziososalvare.qixdeqr.mongodb.net/?retryWrites=true&w=majority';
        const dbName = 'graziososalvare';

        (async function mongo() {
            let client;//create client
            try {
                client = await MongoClient.connect(url); //connect to mongo
                debug('Connected to mongo');

                const db = client.db(dbName); //pull database documents

                const animal = await db.collection('animals').findOne({ _id: new ObjectId(id) });
                //return animal item by id
                res.render('animal', {
                    animal,
                });

            } catch (error) {
                debug(error.stack); //display any errors if app breaks
            }
            client.close();
        })();
    });

module.exports = animalsRouter;