import mongoose from 'mongoose';

const {
  Schema
} = mongoose;

const StudentSchema = new Schema({
  stNum: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  course: {
    ref: 'Course',
    type: Schema.Types.ObjectId,
    required: true,
  },
});
export default mongoose.model('Student', StudentSchema);