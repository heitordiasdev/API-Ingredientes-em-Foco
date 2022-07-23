const { food } = require("../../models");
const FoodService = require("../../services/food");
const foodService = new FoodService(food);
const { body, validationResult } = require("express-validator");

class CreateProduct {
  async addFood(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { id ,name, image, manufacturer, ingredients, infoNutritional } = req.body;
    try {
      const product = await foodService.addFood({
        name,
        image,
        manufacturer,
        ingredients,
        infoNutritional,
        id,
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

module.exports = CreateProduct