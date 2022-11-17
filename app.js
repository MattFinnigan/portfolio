const express = require('express')
const app = express()
const port = 3000
const projects = require('./routes/project.routes')

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use('/projects', projects)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})