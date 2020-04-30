'use strict'

const app = require('./app');


const settings = config();

const appPort = settings.parsed.APP_PORT;
app.listen(appPort, () => {
    console.log('App running', appPort);
});