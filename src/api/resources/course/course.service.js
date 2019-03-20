// import Joi from 'joi';

// export default {
//   validateCreateSchema(body) {
//     const schema = Joi.object().keys({
//       code: Joi.string().required(),
//       name: Joi.string().required(),
//       section: Joi.string().required(),
//       semester: Joi.string().required(),
//     });
//     const {
//       error,
//       value
//     } = Joi.validate(body, schema);
//     if (error && error.details) {
//       return {
//         error
//       };
//     }
//     return {
//       value
//     };
//   },
//   validateUpdateSchema(body) {
//     const schema = Joi.object().keys({
//       code: Joi.string().optional(),
//       name: Joi.string().optional(),
//       section: Joi.string().optional(),
//       semester: Joi.string().optional(),
//     });
//     const {
//       error,
//       value
//     } = Joi.validate(body, schema);
//     if (error && error.details) {
//       return {
//         error
//       };
//     }
//     return {
//       value
//     };
//   },
// };