const express = require('express')
const router = express.Router()
const { food } = require('../models')
const FoodService = require('../services/food')
const { body, validationResult } = require('express-validator')

const foodService = new FoodService(food);


router.get('/', async (req, res) => {
    const listProducts = await foodService.getAll()
    res.json(listProducts)
})


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const product = await foodService.getId(id)
    res.json(product)
})

router.get('/filterContainIngredient/:ingredient', async (req, res) => {
    const ingredient = req.params.ingredient;
    const product = await foodService.filterIngredient(ingredient);
    res.json(product)
})

router.get('/filterNoContainIngredient/:ingredient', async (req, res) => {
    const ingredient = req.params.ingredient;
    const product = await foodService.filterNoContainIngredient(ingredient);
    res.json(product)
})


router.post('/',
    body('name').not().isEmpty().withMessage('O campo nome deve ser preenchido!'),
    body('manufacturer').not().isEmpty().withMessage('O campo fabricante deve ser preenchido!'),
    body('ingredients').not().isEmpty().withMessage('O campo ingredientes deve ser preenchido!'),
    body('infoNutritional').not().isEmpty().withMessage('O campo informações nutricionais deve ser preenchido!'),
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
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

