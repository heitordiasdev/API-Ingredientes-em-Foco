const express = require('express')
const router = express.Router()
const { food } = require('../models')
const FoodService = require('../services/food')

const foodService = new FoodService(food);


router.get('/produto', async (req, res) => {
    const listProducts = await foodService.getAll()
    res.json(listProducts)
})

router.post('/ingrediente', async (req, res) => {
    const { ingredient } = req.body
    const test = await foodService.getIngredients(ingredient)
    res.json(test)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const product = await foodService.getId(id)
    res.json(product)
})


router.post('/', async (req, res) => {
    const { name, manufacturer, ingredients, infoNutritional } = req.body
    try {
        const product = await foodService.addFood({ name, manufacturer, ingredients, infoNutritional })
        res.json(product)
    } catch (erro) {
        res.status(400).send(erro.message)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await foodService.deleteFood(id)
    res.send('Produto deletado com sucesso!')
})

router.put('/:id', async (req, res) => {
    const { name, manufacturer, ingredients, infoNutritional } = req.body
    const id = req.params.id;
    const productupdated = await foodService.editFood(id, { name, manufacturer, ingredients, infoNutritional })
    res.send('Produto atualizado com sucesso!')
})

module.exports = router

