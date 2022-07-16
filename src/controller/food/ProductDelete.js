const { food } = require("../../models");
const FoodService = require("../../services/food");
const foodService = new FoodService(food);

class ProductDelete {
  async deleteFood(req, res) {
    const id = req.params.id;
    try {
      await foodService.deleteFood(id);
      res.status(201).send("Produto deletado com sucesso!");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

module.exports = ProductDelete