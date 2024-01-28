const express = require('express')
const {
    getGastos,
    getGasto,
    createGasto,
    deleteGasto,
    updateGasto
} = require('../controllers/gastoController')

const router = express.Router()

// GET all workouts
router.get('/', getGastos)

// GET a single workout
router.get('/:id', getGasto)

// POST a new workout
router.post('/', createGasto)

// DELETE a new workout
router.delete('/:id', deleteGasto)

// UPDATE a new workout
router.patch('/:id', updateGasto)

module.exports = router