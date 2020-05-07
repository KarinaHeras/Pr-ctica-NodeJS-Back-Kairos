import bodyParser from 'body-parser';
import { config } from 'dotenv';

const settings = config();

export default app => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

   
}



