import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import Course from './course.model';


export default {
  findAll(req, res) {
    Course.find()
      .then(courses => res.json(courses))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  create(req, res) {
    const schema = Joi.object().keys({
      courseCode: Joi.string().required(),
      name: Joi.string().required(),
      section: Joi.number().required(),
      semester: Joi.string().required(),
    });
    const {
      error,
      value
    } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    Course.create(value)
      .then(course => res.json(course))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  findOne(req, res) {
    const {
      id
    } = req.params;
    Course.findById(id)
      .then(course => {
        if (!course) {
          return res.status(HttpStatus.NOT_FOUND).json({
            err: 'Could not find any course'
          });
        }
        return res.json(course);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  findOne(req, res) {
    const {
      id
    } = req.params;
    Course.findById(id)
      .then(course => {
        if (!course) {
          return res.status(HttpStatus.NOT_FOUND).json({
            err: 'Could not find any course'
          });
        }
        return res.json(course);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },

  delete(req, res) {
    const {
      id
    } = req.params;
    Course.findByIdAndRemove(id)
      .then(course => {
        if (!course) {
          return res.status(HttpStatus.NOT_FOUND).json({
            err: 'Could not delete any course'
          });
        }
        return res.json(course);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  update(req, res) {
    const {
      id
    } = req.params;
    const schema = Joi.object().keys({
      courseCode: Joi.string().optional(),
      name: Joi.string().optional(),
      section: Joi.number().optional(),
      semester: Joi.string().optional(),
    });
    const {
      error,
      value
    } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    Course.findOneAndUpdate({
        _id: id
      }, value, {
        new: true
      })
      .then(course => res.json(course))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },

}