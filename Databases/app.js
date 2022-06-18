//pull in dependencies
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PORT = process.env.PORT || 3000;
const app = express();
const animalsRouter = require('./src/routers/animalsRouter');
const adminRouter = require('./src/routers/adminRouter');
const authRouter = require('./src/routers/authRouter');

//middleware
app.use(morgan('tiny'));//output status
app.use(express.static(path.join(__dirname, '/public/')));//pull static html from public folder
app.use(express.json());//body parser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'graziososalvare' }));

require('./src/config/passport.js')(app);

app.set('views', './src/views');//set where to pull html for pages
app.set('view engine', 'ejs');//set how to render pages

//use routers for access to pages and sign-up/sign-in
app.use('/animals', animalsRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

//test pulling hard coded info
app.get('/', (req, res) => {
    res.render('index', { title: 'Grazioso Salvare', data: ['a', 'b', 'c'] });
});

app.listen(PORT, () => {
    debug(`listening on port ${chalk.green(PORT)}`);//use chalk to distinquish info in terminal
});