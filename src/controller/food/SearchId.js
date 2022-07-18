const { food } = require("../../models");
const FoodService = require("../../services/food");
const foodService = new FoodService(food);

class SearchId {
    async getId(req, res) {
        const id = req.params.id;
        try {
            const product = await foodService.getId(id);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
};

module.exports = SearchId;