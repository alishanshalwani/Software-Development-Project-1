import express from 'express';
import courseController from './course.controller';

export const courseRouter = express.Router();

courseRouter.route('/')
  .post(courseController.create)
  .get(courseController.findAll);

courseRouter.route('/:id')
  .get(courseController.findOne)
  .delete(courseController.delete)
  .put(courseController.update);