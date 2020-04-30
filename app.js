
'use strict'

const express = require('express')
const appConfig = require('./config')
const contention = require('./src/resource/BBDD/conexion')
const routes = require('./src/resource/router/router-user')

let app = express();

contention();
appConfig(app);
routes(app);


module.export  = app;