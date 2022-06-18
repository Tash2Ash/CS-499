//pull in dependencies
const passport = require('passport');
require('./strategies/local.strategy')();

//initialize passport start session
module.exports = function passportConfig(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    //sessions
    passport.serializeUser((user, done) => {
        done(null, user);

    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

};