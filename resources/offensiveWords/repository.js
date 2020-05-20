const OffensiveWord = require('./model');

exports.getAllOffensiveWords = function () {
    return OffensiveWord.find({}).exec();
}

exports.getOffensiveWordById = function(offensiveWordId) {
    return OffensiveWord.findById(offensiveWordId).exec();
}

exports.createOffensiveWord = function(body) {
    return OffensiveWord.create(body);
}

exports.deleteOffensiveWordById = function(offensiveWordId) {
    return OffensiveWord.findByIdAndDelete(offensiveWordId).exec();
}

exports.modifyOffensiveWord = function(offensiveWordId, body) {
    return OffensiveWord.findByIdAndUpdate(offensiveWordId, body);
}

exports.findOffensiveWords = function(words, minLevel = 1) {
    return OffensiveWord.find({
        word: { $in: words },
        level: { $gte: minLevel }
    }).exec();
}