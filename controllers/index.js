const Temps = require('../models/Temps')

class Controller {
    
    static currentTempForCity(req, res, next){
        Temps.currentTemp(req.params.city)
            .then(result => res.status(200).json(result))
    }
    static currentHigh(req, res, next){
        Temps.currentHigh(req.params.city)
            .then(result => res.status(200).json(result))
    }
    static currentLow(req, res, next){
        Temps.currentLow(req.params.city)
            .then(result => res.status(200).json(result))
    }
    static fiveDayForecast(req, res, next){
        Temps.fiveDayForecast(req.params.city)
            .then(result => res.status(200).json(result))
    }
}

module.exports = Controller