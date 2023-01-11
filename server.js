//import express module
const express = require('express');
const port = 3000;

const app = express();


const bodyParser = require('body-parser');
// parse application/form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false}));



// setting view engine as ejs 
app.set('view engine', 'ejs');
app.set('views', './view')

// inlcluding mongodb configuration 
const db = require('./config/mongoose');

app.use(express.urlencoded());

// Using Express Router 
app.use('/', require('./routes/index'));

app.listen(port, (err)=>{
    if (err) {
        console.log(`error in running on server${port}`)
        return;
    }
    console.log(`Yeah ::)) Server is running on port ${port}`)
})
