//import express module
const express = require('express');
const port = 3000;

const app = express();

// inlcluding mongodb configuration 
const db = require('./config/mongoose');


//used for session cookie 
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

// store user authentication because when seever restart no need to login again
const MongoStore = require('connect-mongo');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// parse application/form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false}));

//middleware for static file accessing in assets directory
app.use(express.static('./assets'));

// setting view engine as ejs 
app.set('view engine', 'ejs');
app.set('views', './view')


app.use(express.urlencoded());
app.use(cookieParser());

// mongo store is used to store the session cookie in the db 
app.use(session({
    name: "habbit tracker",
    // change secret during before deployment in production 
    secret: 'testpurpose',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/habit-tracker',
        autoRemove : 'disabled'
    },
        (err) => {
            console.log(err || 'connect-mongo setup ok');
      }
    )
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// Using Express Router 
app.use('/', require('./routes/index'));

app.listen(port, (err)=>{
    if (err) {
        console.log(`error in running on server${port}`)
        return;
    }
    console.log(`Yeah ::)) Server is running on port ${port}`)
})
