const { food } = require("../../models");
const FoodService = require("../../services/food");
const foodService = new FoodService(food);

class ContainsIngredient {
  async filterIngredient(req, res) {
    const ingredient = req.params.ingredient;
    try {
      const product = await foodService.filterIngredient(ingredient);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

module.exports = ContainsIngredient