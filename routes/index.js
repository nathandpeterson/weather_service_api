const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.get('/currentTempForCity/:city', controller.currentTempForCity)

module.exports = router