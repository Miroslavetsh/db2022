const mongoose = require('mongoose')
const Schema = mongoose.Schema

let studentSchema = new Schema(
  {
    full_name: {
      type: String,
    },
    presents: {
      type: Boolean,
    },
  },
  {
    collection: 'students',
  },
)

module.exports = mongoose.model('StudentSchema', studentSchema)
