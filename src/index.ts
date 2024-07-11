import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';

const app = express();
app.use(json());
app.use(todoRouter);

mongoose.connect('mongodb://localhost:27017/todo')
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.error('Error connecting to database: ', error);
    });


app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})