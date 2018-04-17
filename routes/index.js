const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.get('/currentTempForCity/:city', controller.currentTempForCity)
router.get('/currentHighForCity/:city', controller.currentHigh)
router.get('/currentLowForCity/:city', controller.currentLow)
router.get('/fiveDayForecast/:city', controller.fiveDayForecast)


module.exports = router