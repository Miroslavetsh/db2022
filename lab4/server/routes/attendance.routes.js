const express = require('express')
const attendanceExpressRoute = express.Router()

const AttendanceSchema = require('../model/attendance.model')

attendanceExpressRoute.route('/').get((_, res) => {
  AttendanceSchema.find((error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log("Returned a Attendance's list Successfully!")
  })
})

attendanceExpressRoute.route('/:id').get((req, res) => {
  AttendanceSchema.findById(req.params.id, (error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log('Returned a Attendance Successfully!')
  })
})

attendanceExpressRoute.route('/').post((req, res, next) => {
  AttendanceSchema.create(req.body, (error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log('Created Successfully!')
  })
})

attendanceExpressRoute.route('/:id').delete((req, res) => {
  AttendanceSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) return next(error)

    res.status(200).json({
      msg: data,
    })
    console.log('Deleted Successfully!')
  })
})

attendanceExpressRoute.route('/:id').put((req, res) => {
  AttendanceSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) return next(error)
      res.json(data)
      console.log('Updated Successfully!')
    },
  )
})

module.exports = attendanceExpressRoute
