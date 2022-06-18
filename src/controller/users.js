const express = require('express')
const router = express.Router()
const { user } = require('../models')
const UserService = require('../services/user')

const userService = new UserService(user);

router.get('/', async (req, res) => {
    const listUser = await userService.getAll()
    res.json(listUser)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const selectUser = await userService.getId(id)
    res.json(selectUser)
})

router.post('/', async (req, res) => {
    const { name, cpfCnpj, email, password, dateNasc, typeUser } = req.body
    try {
        const newUser = await userService.add({ name, cpfCnpj, email, password, dateNasc, typeUser })
        res.json(newUser)
    } catch (erro) {
        res.status(400).send(erro.message)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await userService.deleteUser(id)
    res.send('Usuário deletado com sucesso!')
})

router.put('/:id', async (req, res) => {
    const { name, cpfCnpj, email, password, dateNasc, typeUser } = req.body
    const id = req.params.id;
    const userupdated = await userService.editUser(id, { name, cpfCnpj, email, password, dateNasc, typeUser })
    res.send('Usuário atualizado com sucesso!')
})


module.exports = router