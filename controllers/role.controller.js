const Role = require('../models/role.model')

exports.findAll = (req, res) => {
  Role.findAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.send(data)
    }
  })
}