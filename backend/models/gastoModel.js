const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gastoSchema = new Schema({
    mail: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    concepto: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {timestamps:true})

module.exports = mongoose.model('Gasto', gastoSchema)