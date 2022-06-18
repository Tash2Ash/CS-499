//pull in dependencies
const express = require('express');
const debug = require('debug')('app:authRouter');
const { MongoClient, ObjectId } = require('mongodb');
const passport = require('passport');
const authRouter = express.Router();

//post body to form
authRouter.route('/signUp').post((req, res) => {
    //variables for database
    const { username, password } = req.body;
    const url = 'mongodb+srv://Tasha:<password>@graziososalvare.qixdeqr.mongodb.net/?retryWrites=true&w=majority';
    const dbName = 'graziososalvare';

    //create user
    (async function addUser() {
        let client;
        try {
            //open client and connect to database
            client = await MongoClient.connect(url);
            //variables for user sign up
            const db = client.db(dbName);
            const user = { username, password };
            //add user to database on sign up
            const results = await db.collection('users').insertOne(user);
            debug(results);
            //return username, password detail
            req.login(results.ops[0], () => {
                res.redirect('/auth/profile');//looks for request and sends back user
            });
        } catch (error) {
            debug(error);
        }
        client.close();
    })();
});
//user sign-in
authRouter.route('/signIn').get((req, res) => {
    res.render('signin');
})
    .post(
        passport.authenticate('local', {
            successRedirect: '/animals', //if log in successful user is redirected to animals page
            failureRedirect: '/', //if unsuccessful return to sign up
        })
    );
//return user info from database
authRouter.route('/profile').get((req, res) => {
    res.json(req.user);
});

module.exports = authRouter;