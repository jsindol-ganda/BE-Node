import './env.js'

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes.js';
import compression from 'compression';

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

const port = process.env.BE_PORT ?? '8080';

app.get('/', (req, res) => {
    res.send('API check....good!');
})

app.listen(port, () => {
    console.log("Server Listening on PORT: ", port);
});