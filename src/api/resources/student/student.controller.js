import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import Student from './student.model';

export default {
  findAll(req, res) {
    Student.find()
      .then(students => res.json(students))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  create(req, res) {
    //stNum, password, firstName, lastName, address, city, phone, email, program
    const schema = Joi.object().keys({
      stNum: Joi.number().required(),
      password: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      address: Joi.string().required(),
      city: Joi.string().optional(),
      phone: Joi.string().required(),
      email: Joi.string().required(),
      program: Joi.string().required(),
      course: Joi.string().required(),
    });
    const {
      error,
      value
    } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    Student.create(value)
      .then(student => res.json(student))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  findOne(req, res) {
    const {
      id
    } = req.params;
    Student.findById(id)
      .then(student => {
        if (!student) {
          return res.status(HttpStatus.NOT_FOUND).json({
            err: 'Could not find any student'
          });
        }
        return res.json(student);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  findOne(req, res) {
    const {
      id
    } = req.params;
    Student.findById(id)
      .then(student => {
        if (!student) {
          return res.status(HttpStatus.NOT_FOUND).json({
            err: 'Could not find any student'
          });
        }
        return res.json(student);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },

  delete(req, res) {
    const {
      id
    } = req.params;
    Student.findByIdAndRemove(id)
      .then(student => {
        if (!student) {
          return res.status(HttpStatus.NOT_FOUND).json({
            err: 'Could not delete any student'
          });
        }
        return res.json(student);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  update(req, res) {
    const {
      id
    } = req.params;
    const schema = Joi.object().keys({
      stNum: Joi.number().optional(),
      password: Joi.string().optional(),
      firstName: Joi.string().optional(),
      lastName: Joi.string().optional(),
      address: Joi.string().optional(),
      city: Joi.string().optional(),
      phone: Joi.string().optional(),
      email: Joi.string().optional(),
      program: Joi.string().optional(),
      course: Joi.string().optional(),
    });
    const {
      error,
      value
    } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    Student.findOneAndUpdate({
        _id: id
      }, value, {
        new: true
      })
      .then(student => res.json(student))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },

}