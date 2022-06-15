const express = require('express')
const router = express.Router()
const { user } = require('../models')

router.get('/', async (req, res) => {
    const listUser = await user.findAll()
    res.json(listUser)
})

router.post('/', async (req, res) => {
    const { name, cpfCnpj, email, password, dateNasc, typeUser } = req.body
    const newUser = await user.create({ name, cpfCnpj, email, password, dateNasc, typeUser })
    res.json(newUser)
})



module.exports = router 