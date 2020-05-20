const express = require('express');
const routes = require('./routes');
const db = require('./db');

db.connect();
const app = express();
routes.initialize(app);

exports.server = app;