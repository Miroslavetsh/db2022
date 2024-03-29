const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema(
  {
    full_name: {
      type: String,
      trim: true,
    },
    group_id: Schema.Types.ObjectId,
  },
  {
    collection: 'students',
  },
)

module.exports = mongoose.model('StudentSchema', studentSchema)
