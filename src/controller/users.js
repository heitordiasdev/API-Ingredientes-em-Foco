const express = require('express')
const router = express.Router()
const { user } = require('../models')

router.get('/', async (req, res) => {
    const listUser = await user.findAll()
    res.json(listUser)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const selectUser = await user.findByPk(id)
    res.json(selectUser)
})

router.post('/', async (req, res) => {
    const { name, cpfCnpj, email, password, dateNasc, typeUser } = req.body
    const newUser = await user.create({ name, cpfCnpj, email, password, dateNasc, typeUser })
    res.json(newUser)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await user.destroy({
        where: { id: id }
    })
    res.send('Usuário deletado com sucesso!')
})

router.put('/:id', async (req, res) => {
    const { name, cpfCnpj, email, password, dateNasc, typeUser } = req.body
    const id = req.params.id;
    const userupdated = await user.update({
        name, cpfCnpj, email, password, dateNasc, typeUser
    },
        {
            where: { id: id }
        })
    res.send('Usuário atualizado com sucesso!')
})


module.exports = router 