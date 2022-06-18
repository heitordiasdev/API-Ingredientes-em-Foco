const express = require('express')
const router = express.Router()
const { user } = require('../models')
const UserService = require('../services/user')
const { body, validationResult } = require('express-validator')

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

router.post('/',
    body('name').not().isEmpty().withMessage('O campo nome deve ser preenchido!'),
    body('cpfCnpj').not().isEmpty().withMessage('O campo CPF/CNPJ deve ser preenchido!'),
    body('email').not().isEmpty().isEmail().normalizeEmail().withMessage('O campo e-mail deve ser preenchido corretamente!'),
    body('password').not().isEmpty().withMessage('O campo senha deve ser preenchido!'),
    body('dateNasc').not().isEmpty().withMessage('O campo data de nascimento deve ser preenchido!'),
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
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