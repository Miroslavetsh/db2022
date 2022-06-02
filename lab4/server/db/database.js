require('dotenv').config()
const HOST = process.env.NODE_ENV === 'development' ? 'localhost' : 'data'

module.exports = {
  db: `mongodb://${HOST}:27017/restapi`,
}
