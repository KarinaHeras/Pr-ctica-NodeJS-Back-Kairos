import { config } from 'dotenv';
import app from './app';


const settings = config();

app.listen(3000, () => {
    console.log('3000 levantado');
});