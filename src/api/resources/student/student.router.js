import express from 'express';
import studentController from './student.controller';

export const studentRouter = express.Router();
studentRouter
  .route('/')
  .post(studentController.create)
  .get(studentController.findAll);

studentRouter
  .route('/:id')
  .get(studentController.findOne)
  .delete(studentController.delete)
  .put(studentController.update);