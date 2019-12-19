var express = require('express')
var apiController = require('../controller/apiController')
var router = express.Router()

router.get('/', apiController.sendAPI)

module.exports = router