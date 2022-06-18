//pull in dependencies
const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:localStrategy');

module.exports = function localStrategy() {
    passport.use(new Strategy({
        usernameField: 'username',
        passwordField: 'password'
    },
        (username, password, done) => {
            //variables for database connection
            const url = 'mongodb+srv://Tasha:<password>@graziososalvare.qixdeqr.mongodb.net/?retryWrites=true&w=majority';
            const dbName = 'graziososalvare';

            //validate user
            (async function validateUser() {
                let client;//create client
                try {
                    //connect to database
                    client = await MongoClient.connect(url);
                    debug('Connected to mongo');

                    const db = client.db(dbName);
                    const user = await db.collection('users').findOne({ username });//find user in database

                    if (user && user.password === password) {//if user exists log in
                        done(null, user);
                    } else {//if user does not return to sign up
                        done(null, false);
                    }
                } catch (error) {
                    done(error, false)
                }
                client.close();
            })();
        }));
};