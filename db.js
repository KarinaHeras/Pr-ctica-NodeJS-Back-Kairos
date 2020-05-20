// Connect to mongoose.
const mongoose = require('mongoose');
const offensiveWordsServices = require('./resources/offensiveWords/services');

exports.connect = async function() {
    try {
        await mongoose.connect('mongodb://localhost:27018', {
            dbName: 'practica-nodejs',
            user: 'admin',
            pass: 'admin',
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connected to mongo');
        await offensiveWordsServices.checkAndLoadDefaultOffensiveWords();
    } catch(err) {
        console.log('Something is wrong connecting to mongo', err);
    };
};
