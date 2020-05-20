const repository = require('../resources/offensiveWords/repository');
const validator = require('../validators/validateOffensiveWords');

exports.middleware = (req, res, next) => {
    repository.getAllOffensiveWords()
    .then((allOffensiveWords) => {
        const detectedOffensiveWords = validator.validateOffensiveWords(allOffensiveWords, req.body.content);

        if (!detectedOffensiveWords.length) {
            next(); 
        } else {
            const responseWords = detectedOffensiveWords
                .map((item) => `${item.word} (nivel ${item.level})`)
                .join(', ');
            res.status(400).json({
                message: `Las palabras ${responseWords} no están permitidas`
            });
        }
    });    
};