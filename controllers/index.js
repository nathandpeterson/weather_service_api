const Temps = require('../models/Temps')

class Controller {
    static currentTempForCity(req, res, next){
        console.log('req params', req.params)
        Temps.currentTemp(req.params.city)
            .then(result => res.status(200).json(result))
    }
}

module.exports = Controller