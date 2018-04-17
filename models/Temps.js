const axios = require('axios')
const API = "http://api.openweathermap.org/data/2.5/weather?q="
const KEY = process.env.WEATHER_KEY || null
const test = 'http://api.openweathermap.org/data/2.5/weather\?q\=seattle\&APPID\=fef02cc03dad8b6bdd11c1be29a83d4a'

class Temps {
    static currentTemp(city){
        return axios(test)
            .then(({data}) => data)
            .catch(err => console.log('*********axios call failed',err))
    }
}


module.exports = Temps