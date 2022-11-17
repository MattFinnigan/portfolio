const express = require('express');
const router = express.Router();
const projects = require('../controllers/project.controller')

router.get('/all', projects.findAll);

module.exports = router;
