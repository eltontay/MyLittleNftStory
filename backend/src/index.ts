import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/main';

const app = express();
const port: number = 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());

app.use('/api/main', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})