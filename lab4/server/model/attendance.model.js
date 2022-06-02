const mongoose = require('mongoose')
const studentModel = require('./student.model')
const Schema = mongoose.Schema

const attendanceSchema = new Schema(
  {
    subject_id: Schema.Types.ObjectId,
    group_id: Schema.Types.ObjectId,
    amount_of_students_present: Integer,
    date: Date,
    students: [{ ...studentModel, presents: Boolean }],
  },
  {
    collection: 'attendances',
  },
)

module.exports = mongoose.model('AttendanceSchema', attendanceSchema)
