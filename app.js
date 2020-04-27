const express = require('express')
const appConfig = require('./config')
const connectToDb = require('./src/App/BBDD/conexion')
const routes = require('./routes')

let app = express();

connectToDb();
appConfig(app);
routes(app);


export default app;