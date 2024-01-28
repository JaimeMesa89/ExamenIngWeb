require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const gastos = require('./routes/gastos')

// express app
const app = express()

// Use CORS middleware
app.use(cors());

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/gastos', gastos)

// connect to db
mongoose.connect(process.env.MONGO_URL)
    .then (() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('Listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })