const { food } = require("../../models");
const FoodService = require("../../services/food");
const foodService = new FoodService(food);

class UpdateProduct {
  async editFood(req, res) {
    const { name, manufacturer, ingredients, infoNutritional } = req.body;
    const id = req.params.id;
    try {
      await foodService.editFood(id, {
        name,
        manufacturer,
        ingredients,
        infoNutritional,
      });
      res.status(201).send("Produto atualizado com sucesso!");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

module.exports = UpdateProduct