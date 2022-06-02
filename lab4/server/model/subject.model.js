const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subjectSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    group_id: Schema.Types.ObjectId,
    amount_per_year: Number,
  },
  {
    collection: 'subjects',
  },
)

module.exports = mongoose.model('SubjectSchema', subjectSchema)
