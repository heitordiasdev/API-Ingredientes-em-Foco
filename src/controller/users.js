const express = require('express')
const router = express.Router()
const { user } = require('../models')

router.get('/', async (req,res) =>{
const listaUser = await user.findAll()
    res.json(listaUser)
})

router.post('/', async (req,res) =>{
    const { name,cpfCnpj,email,password,tipo,dateNasc } = req.body
    await user.create({name,cpfCnpj,email,password,tipo,dateNasc})
    res.send('Usuario criado com sucesso !')
})

module.exports = router 