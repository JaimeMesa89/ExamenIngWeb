const Gasto = require('../models/gastoModel')
const mongoose = require('mongoose')

// get all gastos
const getGastos = async (req, res) => {
    const gastos = await Gasto.find({}).sort({createdAt:-1})

    res.status(200).json(gastos)
}

// get a single gasto
const getGasto = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such gasto'})
    }

    const gasto = await Gasto.findById(id)

    if(!gasto) {
        return res.status(404).json({error: 'No such gasto'})
    }

    res.status(200).json(gasto)
}

// create new gasto
const createGasto = async(req, res) => {
    const {name, timestamp, place, lat, long, organizer, image} = req.body

    try {
        const gasto = await Gasto.create({name, timestamp, place, lat, long, organizer, image})
        res.status(200).json(gasto)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a gasto
const deleteGasto = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such gasto'})
    }

    const gasto = await Gasto.findOneAndDelete({_id: id})

    if (!gasto) {
        return res.status(404).json({error:'No such gasto'})
    }

    res.status(200).json(gasto)
}

// update a gasto
const updateGasto = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such gasto'})
    }

    const gasto = await Gasto.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!gasto) {
        return res.status(404).json({error:'No such gasto'})
    }

    res.status(200).json(gasto)
}

module.exports = {
    getGastos,
    getGasto,
    createGasto,
    deleteGasto,
    updateGasto
}