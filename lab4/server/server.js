let express = require('express')
const createError = require('http-errors')
path = require('path')
mongoose = require('mongoose')
cors = require('cors')
bodyParser = require('body-parser')
dbConfig = require('./db/database')

mongoose.Promise = global.Promise
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log('Database connected')
    },
    (error) => {
      console.log('Database could not be connected : ' + error)
    },
  )

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

app.use(cors())

const studentRoutes = require('./routes/student.routes')
const groupRoutes = require('./routes/group.routes')
const attendanceRoutes = require('./routes/attendance.routes')
const subjectRoutes = require('./routes/subject.routes')

app.use('/students', studentRoutes)
app.use('/groups', groupRoutes)
app.use('/attendances', attendanceRoutes)
app.use('/subjects', subjectRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('Port connected to: ' + port)
})

app.use((req, res, next) => {
  next(createError(404))
})

app.get('/', (_, res) => {
  res.send('Invalid endpoint')
})

app.use((err, _, res) => {
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
