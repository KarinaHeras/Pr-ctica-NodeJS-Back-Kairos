exports.validateOffensiveWords = function (offensiveWords, text, minLevel = 1) {
    const words = text.toLowerCase().split(' ');

    return offensiveWords
        .filter((item) => item.level >= minLevel && words.includes(item.word))
        .map((item) => ({ word: item.word, level: item.level }));
}