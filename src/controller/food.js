const express = require('express')
const router = express.Router()
const { food } = require('../models')

router.get('/', async (req, res) => {
    const listProducts = await food.findAll()
    res.json(listProducts)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const product = await food.findByPk(id)
    res.json(product)
})

router.post('/', async (req, res) => {
    const { name, manufacturer, ingredients, infoNutritional } = req.body
    const product = await food.create({ name, manufacturer, ingredients, infoNutritional })
    res.json(product)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await food.destroy({
        where: { id: id }
    })
    res.send('Produto deletado com sucesso!')
})

router.put('/:id', async (req, res) => {
    const { name, manufacturer, ingredients, infoNutritional } = req.body
    const id = req.params.id;
    const productupdated = await food.update({
        name, manufacturer, ingredients, infoNutritional
    },
        {
            where: { id: id }
        })
    res.send('Produto atualizado com sucesso!')
})

module.exports = router


