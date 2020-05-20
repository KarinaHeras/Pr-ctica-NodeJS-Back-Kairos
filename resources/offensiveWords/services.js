const repository = require('./repository');

exports.getOffensiveWords = function () {
    return repository.getAllOffensiveWords();
}

exports.getOffensiveWordById = function (offensiveWordId) {
    return repository.getOffensiveWordById(offensiveWordId);
}

exports.createOffensiveWord = function (body) {
    body.word = body.word.toLowerCase();
    return repository.createOffensiveWord(body);
}

exports.deleteOffensiveWordById = function (offensiveWordId) {
    return repository.deleteOffensiveWordById(offensiveWordId);
}

exports.modifyOffensiveWord = function(offensiveWordId, body){
    return repository.modifyOffensiveWord(offensiveWordId, body);
}

exports.checkAndLoadDefaultOffensiveWords = function() {
    return repository.getAllOffensiveWords().then((offensiveWords) => {
        if(!offensiveWords || !offensiveWords.length) {
            return repository.createOffensiveWord(require('../../data/defaultOffensiveWords.json'));
        }
        return Promise.resolve();
    });
}