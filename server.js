//import express module
const express = require('express');
const port = 3000;

const app = express();

// setting view engine as ejs 
app.set('view engine', 'ejs');
app.set('views', './view')


// Using Express Router 
app.use('/', require('./routes/index'));

app.listen(port, (err)=>{
    if (err) {
        console.log(`error in running on server${port}`)
        return;
    }
    console.log(`Yeah ::)) Server is running on port ${port}`)
})
