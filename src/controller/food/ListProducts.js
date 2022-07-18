const { food } = require("../../models");
const FoodService = require("../../services/food");
const foodService = new FoodService(food);

class ListProducts {
    async getAll(req, res) {
        const listProducts = await foodService.getAll()
        res.json(listProducts)
    }

};

module.exports = ListProducts;