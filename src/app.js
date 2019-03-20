import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import cors from 'cors';

import {
  restRouter
} from './api';

const app = express();
const port = 3333;


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(logger('dev'));

app.use('/api', restRouter);


//connect to mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost/assignment3', {
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

//error message for invalid route
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});

//for global error
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});