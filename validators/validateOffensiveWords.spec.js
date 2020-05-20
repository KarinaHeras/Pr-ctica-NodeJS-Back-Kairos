const validator = require('./validateOffensiveWords');

describe('Simple tests for offensive words', () => {
    it('there are not offensive words', () => {
        const offensiveWords = [
            {word: 'caca', level: 3},
            {word: 'pipi', level: 1}
        ];
        const text = 'No me gusta';
        const response = validator.validateOffensiveWords(offensiveWords, text);
        expect(response).toEqual([]);
    })
    it('there are some offensive words', () => {
        const offensiveWords = [
            {word: 'caca', level: 3},
            {word: 'pipi', level: 1}
        ];
        const text = 'Pues esto es una caca';
        const response = validator.validateOffensiveWords(offensiveWords, text);
        expect(response).toEqual([
            {word: 'caca', level: 3}
        ]);
    })
    it('the level is important', () => {
        const offensiveWords = [
            {word: 'caca', level: 3},
            {word: 'pipi', level: 1}
        ];
        const text = 'Pues esto es una caca';
        const response = validator.validateOffensiveWords(offensiveWords, text, 4);
        expect(response).toEqual([]);
    })
    it('found the words in a long string', () => {
        const offensiveWords = [
            {word: 'caca', level: 3},
            {word: 'pipi', level: 1}
        ];
        const text = 'Pues esto es una caca y no me importa si te haces pipi porque no pienso callarme';
        const response = validator.validateOffensiveWords(offensiveWords, text);
        expect(response).toEqual([
            {word: 'caca', level: 3},
            {word: 'pipi', level: 1}
        ]);
    })
})