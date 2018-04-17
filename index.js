const express = require('express')
const app = express()
const PORT = process.env.PORT || 3050

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const morgan = require('morgan')
app.use(morgan('dev'))

app.get('/', (req, res) => res.send(
    {
        server: {
            name: 'API Starter Server',
            apiVersion: '0.2'
        },
        availableDataSeries: {
            increasingData: {
                name: 'Increasing data values',
                description: 'Numbers 1 to 5'
            },
            flatData: {
                name: 'Flat data values',
                description: "Just the number 5"
            }
        }
    }
))

app.use('/api', require('./routes'))


app.get('/api/increasingData', (req, res) => res.send(
    {
        format: 'date',
        initialDataSet: [
            [Date.now(), 1],
            [Date.now()+10, 2],
            [Date.now()+20, 3],
            [Date.now()+30, 4],
            [Date.now()+40, 5],
        ]
    }
))

app.get('/api/flatData', (req, res) => res.send(
    {
        format: 'date',
        initialDataSet: [
            [Date.now(), 5],
            [Date.now()+10, 5],
            [Date.now()+20, 5],
            [Date.now()+30, 5],
            [Date.now()+40, 5],
        ]
    }
))

app.use((req, res, next) => {
    const status = 404
    const message = `Could not find route matching: ${req.method} ${req.path}`
    next({ status, message })
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'Something went wrong!'
    res.status(status).json({error: {message}})
})

app.listen(3050, () => console.log(`Listening on port ${PORT}!`))