const axios = require('axios')
const API = "http://api.openweathermap.org/data/2.5/"
const KEY = 'fef02cc03dad8b6bdd11c1be29a83d4a'

const convertToFahrenheit = kelvin => {
    const fahrenheit = 1.8*(kelvin -273) + 32
    return Number(fahrenheit.toFixed(2))
}

function formatData(data){
    return {'format': 'date',
            'initialDataSet': [[Date.now(), data]]}
}

class Temps {
   
    static currentTemp(city){
        return axios(`${API}weather?q=${city}&APPID=${KEY}`)
            .then(({data: {main: {temp} }}) => {
                // temp is in kelvin
                const fahrenheit = convertToFahrenheit(temp)
                return formatData(fahrenheit)
            })
    }
    static currentHigh(city){
        return axios(`${API}weather?q=${city}&APPID=${KEY}`)
            .then(({data: {main}}) => {
                const fahrenheit = convertToFahrenheit(main.temp_max)
                return formatData(fahrenheit)
            })
    }
    static currentLow(city){
        return axios(`${API}weather?q=${city}&APPID=${KEY}`)
            .then(({data: {main}}) => {
                const fahrenheit = convertToFahrenheit(main.temp_min)
                return formatData(fahrenheit)
            })
    }

    static fiveDayForecast(city){
        return axios(`${API}forecast?q=${city}&APPID=${KEY}`)
            .then(({data: {list}}) => {
            const temps = list.map(el =>{
                return  [Date.parse(el.dt_txt), convertToFahrenheit(el.main.temp)]
            })
            return {'format': 'date', 'initialDataSet': temps}
        })
    }
}


module.exports = Temps