const { food } = require("../../models");
const FoodService = require("../../services/food");
const foodService = new FoodService(food);
// Filtra os produtos pelo nome, e que contém um ingrediente especifico
class FilterFoodIngredient{
 async filterFoodIngredient(req, res){
    const food = req.params.food;
    const ingredient = req.params.ingredient;
    try {
      const product = await foodService.filterFoodIngredient(food,ingredient);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};


module.exports = FilterFoodIngredient