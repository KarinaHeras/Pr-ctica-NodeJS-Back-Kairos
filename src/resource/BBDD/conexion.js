import { config } from 'dotenv';
const express = require('express');
var fs = require('fs');
var https = require('https');
import OffensiveWordRepository from '../resources/offensivewords/repository';

mongoose.Promise = global.Promise;

const settings = config();

const connectToDb = async () => {
    try {
        await mongoose.connect(settings.parsed.MONGO_URL,
            {
                auth: { "authSource": "admin" },
                user: "admin",
                pass: "admin",
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false
            });
        populateOffensiveWords();
    } catch (err) {
        console.log(err);
    }
}

const populateOffensiveWords = async () => {
    try {
        const offensiveWords = await OffensiveWordRepository.getAll();
        if (offensiveWords.length === 0) {
            OffensiveWordRepository.addOffensiveWord({ word: 'Caca', level: 3 });
            OffensiveWordRepository.addOffensiveWord({ word: 'Culo', level: 2 });
            OffensiveWordRepository.addOffensiveWord({ word: 'Pedo', level: 5 });
            OffensiveWordRepository.addOffensiveWord({ word: 'Pipi', level: 4 });
            console.info('Populate offensive words success');
        }
    } catch (err) {
        console.log(err);
    }
}



const app = express();
//openssl req -nodes -new -x509 -keyout server.key -out server.cert
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(3443, () => {
    console.log("Https server started in port 3443");
});
export default connectToDb;