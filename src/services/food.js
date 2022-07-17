const { Op } = require("sequelize");
class FoodService {
  constructor(FoodModel) {
    this.food = FoodModel;
  }

  async filterFood(food) {
    try {
      const listFilterFood = await this.food.findAll({
        attributes: ["name", "manufacturer", "ingredients", "infoNutritional"],
        where: {
          name: {
            [Op.iLike]: "%" + food + "%",
          },
        },
      });
      return listFilterFood;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

  async filterFoodIngredient(food, ingredient) {
    try {
      const listFilterFood = await this.food.findAll({
        attributes: ["name", "manufacturer", "ingredients", "infoNutritional"],
        where: {
          name: {
            [Op.iLike]: "%" + food + "%",
          },
          ingredients: {
            [Op.iLike]: "%" + ingredient + "%",
          },
        },
      });
      return listFilterFood;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

  async filterFoodNotIngredient(food, ingredient) {
    try {
      const listFilterFood = await this.food.findAll({
        attributes: ["name", "manufacturer", "ingredients", "infoNutritional"],
        where: {
          name: {
            [Op.iLike]: "%" + food + "%",
          },
          ingredients: {
            [Op.notILike]: "%" + ingredient + "%",
          },
        },
      });
      return listFilterFood;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }


    
  async getAll() {
    try {
      const listFood = await this.food.findAll();
      return listFood;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

  async getId(id) {
    try {
      const selectFood = await this.food.findByPk(id);
      return selectFood;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

  async filterIngredient(ingredient) {
    try {
      const listFilterIngredient = await this.food.findAll({
        attributes: ["name", "manufacturer", "ingredients", "infoNutritional"],
        where: {
          ingredients: {
            [Op.iLike]: "%" + ingredient + "%",
          },
        },
      });
      return listFilterIngredient;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

  async filterNoContainIngredient(ingredient) {
    try {
      let listIngredient = [];
      let listIngredientFiltered = [];
      let listFiltered = [];

      listIngredient = await this.food.findAll();
      listIngredientFiltered = await this.food.findAll({
        attributes: [
          "id",
          "name",
          "manufacturer",
          "ingredients",
          "infoNutritional",
        ],
        where: {
          ingredients: {
            [Op.notILike]: "%" + ingredient + "%",
          },
        },
      });

      return listIngredientFiltered;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

  async addFood(foodData) {
    //Verifica se já existe food com o mesmo nome e fornecedor
    const food = await this.food.findOne({
      where: {
        name: foodData.name,
        manufacturer: foodData.manufacturer,
      },
    });
    if (food != null) {
      throw new Error(
        "Já existe um produto cadastrado com esse nome e fabricante!"
      );
    }
    try {
      const newFood = await this.food.create({
        name: foodData.name,
        manufacturer: foodData.manufacturer,
        ingredients: foodData.ingredients,
        infoNutritional: foodData.infoNutritional,  
        UserId: foodData.UserId
      });
      return newFood;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

  async deleteFood(id) {
    try {
      await this.food.destroy({
        where: { id: id },
      });
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

  async editFood(id, foodData) {
    try {
      const userUpdate = await this.food.update(
        {
          name: foodData.name,
          manufacturer: foodData.manufacturer,
          ingredients: foodData.ingredients,
          infoNutritional: foodData.infoNutritional,
        },
        { where: { id: id } }
      );
      return userUpdate;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }
}

module.exports = FoodService;