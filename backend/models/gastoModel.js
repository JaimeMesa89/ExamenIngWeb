const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gastoSchema = new Schema({
    mail: {
        type: String,
    },
    token: {
        type: String,
    },
    concepto: {
        type: String,
    },
    direccion: {
        type: String,
    },
    lat: {
        type: String,
    },
    long: {
        type: String,
    },
    image: {
        type: String,
    },
}, {timestamps:true})

module.exports = mongoose.model('Gasto', gastoSchema)