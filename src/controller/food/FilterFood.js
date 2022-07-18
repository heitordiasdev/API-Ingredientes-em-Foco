const { food } = require("../../models");
const FoodService = require("../../services/food");
const foodService = new FoodService(food);
// Filtra os produtos pelo nome
class FilterFood{
 async filterFoods(req, res){
    const food = req.params.food;
    try {
      const product = await foodService.filterFood(food);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
 }


module.exports = FilterFood