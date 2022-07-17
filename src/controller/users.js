const express = require("express");
const router = express.Router();
const { user } = require("../models");
const UserService = require("../services/user");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authconfig = require('../config/auth.json')
const userService = new UserService(user);

function generateToken(params = {}){
  return jwt.sign(params, authconfig.secret, {
       expiresIn:86400
   });
}
router.post('/authenticate', async(req,res) => {
  const {email, password} = req.body
  const user =  userService.postAuth(email)
  console.log(user);
  if(!user)
        return res.status(400).send({ error: 'User not found'});

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error:'Invalid password'})
    
    //user.password = undefined;


    res.send({
        user,
        token:generateToken({id:user.id})
    })
})

// Busca todos os dados
router.get("/", async (req, res) => {
  try {
    const listUser = await userService.getAll();
    res.status(201).json(listUser);
  } catch (error) {
    res.status(400).send(error.mensage);
  }
});

// Buscar user específico
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const selectUser = await userService.getId(id);
    res.status(201).json(selectUser);
  } catch (error) {
    res.status(400).send(error.mensage);
  }
});

// Enviar um novo user
router.post("/", async (req, res) => {
  const { name, cpfCnpj, email, password, dateNasc, typeUser } = req.body;
  try {
    const newUser = await userService.add({
      name,
      cpfCnpj,
      email,
      password,
      dateNasc,
      typeUser,
    });
    newUser.password = undefined;
    return res.send({
      newUser,
      token:generateToken({id:newUser.id})});
  } catch (error) {
    res.status(400).send(error.mensage);
  }
});

// Deleta um user específico
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await userService.deleteUser(id);
    res.status(201).send("Usuário deletado com sucesso!");
  } catch (error) {
    res.status(400).send(error.mensage);
  }
});

// Atualiza um user
router.put("/:id", async (req, res) => {
  const { name, cpfCnpj, email, password, dateNasc, typeUser } = req.body;
  const id = req.params.id;
  try {
    const userupdated = await userService.editUser(id, {
      name,
      cpfCnpj,
      email,
      password,
      dateNasc,
      typeUser,
    });
    res.status(201).send("Usuário atualizado com sucesso!");
  } catch (error) {
    res.status(400).send(error.mensage);
  }
});

module.exports = router;