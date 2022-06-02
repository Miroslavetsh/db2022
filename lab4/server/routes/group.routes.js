const express = require('express')
const groupExpressRoute = express.Router()

const GroupSchema = require('../model/group.model')

groupExpressRoute.route('/').get((_, res) => {
  GroupSchema.find((error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log("Returned a Group's list Successfully!")
  })
})

groupExpressRoute.route('/:id').get((req, res) => {
  GroupSchema.findById(req.params.id, (error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log('Returned a Group Successfully!')
  })
})

groupExpressRoute.route('/').post((req, res, next) => {
  GroupSchema.create(req.body, (error, data) => {
    if (error) return next(error)

    res.json(data)
    console.log('Created Successfully!')
  })
})

groupExpressRoute.route('/:id').delete((req, res) => {
  GroupSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) return next(error)

    res.status(200).json({
      msg: data,
    })
    console.log('Deleted Successfully!')
  })
})

groupExpressRoute.route('/:id').put((req, res) => {
  GroupSchema.findByIdAndUpdate(
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

module.exports = groupExpressRoute
