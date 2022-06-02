const mongoose = require('mongoose')
const Schema = mongoose.Schema

const attendanceSchema = new Schema(
  {
    subject_id: Schema.Types.ObjectId,
    group_id: Schema.Types.ObjectId,
    amount_of_students_present: Number,
    date: Date,
    students: [
      {
        full_name: {
          type: String,
          trim: true,
        },
        group_id: Schema.Types.ObjectId,
        presents: Boolean,
      },
    ],
  },
  {
    collection: 'attendances',
  },
)

module.exports = mongoose.model('AttendanceSchema', attendanceSchema)
