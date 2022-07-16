const express = require("express");
const router = express.Router();
const { food } = require("../models");
const FoodService = require("../services/food");
const { body, validationResult } = require("express-validator");

const foodService = new FoodService(food);

// Busca a lista de produtos
router.get("/", async (req, res) => {
  try {
    const listProducts = await foodService.getAll();
    res.status(201).json(listProducts);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Buscar um alimento especifico
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await foodService.getId(id);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Filtra os produtos que contém o ingrediente
router.get("/filterContainIngredient/:ingredient", async (req, res) => {
  const ingredient = req.params.ingredient;
  try {
    const product = await foodService.filterIngredient(ingredient);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Filtra os produtos que não contém o ingrediente
router.get("/filterNoContainIngredient/:ingredient", async (req, res) => {
  const ingredient = req.params.ingredient;
  try {
    const product = await foodService.filterNoContainIngredient(ingredient);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Envia o produto criado
router.post(
  "/",
  body("name").not().isEmpty().withMessage("O campo nome deve ser preenchido!"),
  body("manufacturer")
    .not()
    .isEmpty()
    .withMessage("O campo fabricante deve ser preenchido!"),
  body("ingredients")
    .not()
    .isEmpty()
    .withMessage("O campo ingredientes deve ser preenchido!"),
  body("infoNutritional")
    .not()
    .isEmpty()
    .withMessage("O campo informações nutricionais deve ser preenchido!"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, manufacturer, ingredients, infoNutritional } = req.body;
    const UserId = 19 //user id logged
    try {
      const product = await foodService.addFood({
        name,
        manufacturer,
        ingredients,
        infoNutritional,
        UserId
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
);

// Deleta um produto especifico
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await foodService.deleteFood(id);
    res.status(201).send("Produto deletado com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Atualiza um produto especifico
router.put("/:id", async (req, res) => {
  const { name, manufacturer, ingredients, infoNutritional } = req.body;
  const id = req.params.id;
  try {
    const productupdated = await foodService.editFood(id, {
      name,
      manufacturer,
      ingredients,
      infoNutritional,
    });
    res.status(201).send("Produto atualizado com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;