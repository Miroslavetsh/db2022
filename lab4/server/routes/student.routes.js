const express = require('express')
const studentExpressRoute = express.Router()

const StudentSchema = require('../model/student.model')

studentExpressRoute.route('/').get((_, res) => {
  StudentSchema.find((error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log("Returned a Student's list Successfully!")
  })
})

studentExpressRoute.route('/:id').get((req, res) => {
  StudentSchema.findById(req.params.id, (error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log('Returned a Student Successfully!')
  })
})

studentExpressRoute.route('/').post((req, res, next) => {
  StudentSchema.create(req.body, (error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log('Created Successfully!')
  })
})

studentExpressRoute.route('/:id').delete((req, res) => {
  StudentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) return next(error)

    res.status(200).json({
      msg: data,
    })
    console.log('Deleted Successfully!')
  })
})

studentExpressRoute.route('/:id').put((req, res) => {
  StudentSchema.findByIdAndUpdate(
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

module.exports = studentExpressRoute
