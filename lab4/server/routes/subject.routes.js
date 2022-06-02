const express = require('express')
const subjectExpressRoute = express.Router()

const SubjectSchema = require('../model/subject.model')

subjectExpressRoute.route('/').get((_, res) => {
  SubjectSchema.find((error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log("Returned a Subject's list Successfully!")
  })
})

subjectExpressRoute.route('/:id').get((req, res) => {
  SubjectSchema.findById(req.params.id, (error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log('Returned a Subject Successfully!')
  })
})

subjectExpressRoute.route('/').post((req, res, next) => {
  SubjectSchema.create(req.body, (error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log('Created Successfully!')
  })
})

subjectExpressRoute.route('/:id').delete((req, res) => {
  SubjectSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) return next(error)

    res.status(200).json({
      msg: data,
    })
    console.log('Deleted Successfully!')
  })
})

subjectExpressRoute.route('/:id').put((req, res) => {
  SubjectSchema.findByIdAndUpdate(
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

module.exports = subjectExpressRoute
