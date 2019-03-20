import mongoose from 'mongoose';

const {
  Schema
} = mongoose;

const CourseSchema = new Schema({
  courseCode: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  section: {
    type: Number,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
});
export default mongoose.model('Course', CourseSchema);