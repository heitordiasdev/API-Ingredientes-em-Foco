const { food } = require("../../models");
const FoodService = require("../../services/food");
const foodService = new FoodService(food);

class NoContainIngredient {
  async filterNoContainIngredient(req, res) {
    const ingredient = req.params.ingredient;
    try {
      const product = await foodService.filterNoContainIngredient(ingredient);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

module.exports = NoContainIngredient