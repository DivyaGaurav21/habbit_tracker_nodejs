const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://divyagaurav:divyagaurav@cluster1.ispjeaf.mongodb.net/?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost/habit-tracker');

const db = mongoose.connection;

//if error then pritnt message
db.on('error', console.error.bind(console, 'error in connectin DB'));

// server is up then run a message 
db.once('open', () => {
    console.log('Succesfully !! Connected to the DataBase');
})
module.export = db;


