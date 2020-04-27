const mongoose = require('mongoose')

const OffensiveWordSchema = new mongoose.Schema({
    word: {type: 'String'},
    level: {type: 'Number'}
});

export default mongoose.model('offensivewords', OffensiveWordSchema);