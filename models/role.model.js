const sql = require('./db')

// constructor
const Role = function(r) {
  this.id = r.id
  this.name = r.name
  this.company = r.company
  this.dates = r.dates
  this.link = r.link
  this.resps = r.resps
  this.created = r.created
};

Role.findAll = result => {
  sql.query(`SELECT * FROM roles`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    }

    console.log('Roles.findAll', res)
    result(null, res) 
  })
}

module.exports = Role