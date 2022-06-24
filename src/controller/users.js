const express = require("express");
const router = express.Router();
const { user } = require("../models");
const UserService = require("../services/user");
const { body, validationResult } = require("express-validator");

const userService = new UserService(user);

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
    res
      .status(newUser.code)
      .json({ message: newUser.message, data: newUser.data });
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