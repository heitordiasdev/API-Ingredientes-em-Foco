const express = require('express')
const router = express.Router()
const { food } = require('../models')

router.get('/', async (req, res) => {
    const listProducts = await food.findAll()
    res.json(listProducts)
})

router.post('/', async (req, res) => {
    const { name, manufacturer, ingredients, infoNutritional } = req.body
    await food.create({ name, manufacturer, ingredients, infoNutritional })
    res.send('Produto criado com sucesso !')
})

module.exports = router


