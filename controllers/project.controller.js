const Project = require('../models/project.model')

exports.findAll = (req, res) => {
  Project.findAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.send(data)
    }
  })
}