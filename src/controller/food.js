const express = require('express')
const router = express.Router()
const { food } = require('../models')

router.get('/', async (req,res) =>{
const listaProdutos = await food.findAll()
    res.json(listaProdutos)
})

router.post('/', async (req,res) =>{
    const { name,fabricante,ingredientes,infoNutrional } = req.body
    await food.create({name,fabricante,ingredientes,infoNutrional})
    res.send('Produto criado com sucesso !')
})

module.exports = router 


