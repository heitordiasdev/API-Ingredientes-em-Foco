const express = require('express')
const router = express.Router()
const { user } = require('../models')

router.get('/', async (req, res) => {
    const listUser = await user.findAll()
    res.json(listUser)
})

router.post('/', async (req, res) => {
    const { name, cpfCnpj, email, password, typeUser, dateNasc } = req.body
    await user.create({ name, cpfCnpj, email, password, typeUser, dateNasc })
    res.send('Usuario criado com sucesso !')
})

module.exports = router 