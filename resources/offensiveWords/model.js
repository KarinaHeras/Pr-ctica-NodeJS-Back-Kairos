const mongoose = require('mongoose');

// Define Schema.

const offensiveWordSchema = new mongoose.Schema({
    word: String,
    level: Number
});

// Generate Schema Model.
module.exports = mongoose.model('OffensiveWord', offensiveWordSchema);