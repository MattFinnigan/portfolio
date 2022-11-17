const sql = require('./db')

// constructor
const Project = function(p) {
  this.id = p.id;
  this.name = p.title;
  this.created = p.created;
};

Project.findAll = result => {
  sql.query(`SELECT * FROM projects`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    }

    console.log('Projects.findAll', res)
    result(null, res) 
  })
}

module.exports = Project