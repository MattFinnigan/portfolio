const express = require('express');
const router = express.Router();
const roles = require('../controllers/role.controller')

router.get('/all', roles.findAll);

module.exports = router;
