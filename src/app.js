import express from 'express';
import appConfig from './config';
import connectToDb from './db/connect';

let app = express();

connectToDb();
appConfig(app);


export default app;


