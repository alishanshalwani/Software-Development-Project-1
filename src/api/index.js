import express from 'express';
import {
  studentRouter
} from './resources/student';
import {
  courseRouter
} from './resources/course';

export const restRouter = express.Router();
restRouter.use('/students', studentRouter);
restRouter.use('/courses', courseRouter);