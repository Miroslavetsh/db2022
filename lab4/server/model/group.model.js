const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    students: [Schema.Types.ObjectId],
  },
  {
    collection: 'groups',
  },
)

module.exports = mongoose.model('GroupSchema', groupSchema)
