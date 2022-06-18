class FoodService {
    constructor(FoodModel) {
        this.food = FoodModel
    }

    async getAll() {
        try {
            const listUser = await this.food.findAll()
            return listUser
        } catch (erro) {
            console.error(erro.message)
            throw erro
        }
    }

    async getId(id) {
        try {
            const selectFood = await this.food.findByPk(id)
            return selectFood
        } catch (erro) {
            console.error(erro.message)
            throw erro
        }
    }

    /*  async getIngredient() {
           
          try {
              const selectFood = await this.food.findAll({
                  attributes: ['']
              })
              return selectFood
          } catch (erro) {
              console.error(erro.message)
              throw erro
          }
      }*/

    async getIngredients(ingredient) {
        let test = []
        let arrIngreline = []
        let result = []
        const listFood = await this.food.findAll({})

        let allIngredients = listFood.map((x) => x.ingredients)
        let id = listFood.map((x) => x.id)

        for (var i = 0; i < id.length; i++) {

            arrIngreline = allIngredients[i].split(", ")

            for (var j = 0; j < arrIngreline.length; j++) {

                if (arrIngreline[j] == ingredient) {

                    const selectFood = await this.food.findByPk(id[i])
                    test.push({
                        name: selectFood.name
                    })
                    result[i] = selectFood
                    console.log(test)
                }
            }

        }
        return result
    }


    async addFood(foodData) {
        try {
            const newFood = await this.food.create(
                {
                    "name": foodData.name,
                    "manufacturer": foodData.manufacturer,
                    "ingredients": foodData.ingredients,
                    "infoNutritional": foodData.infoNutritional
                })
            return newFood
        } catch (erro) {
            console.error(erro.message)
            throw erro
        }
    }

    async deleteFood(id) {
        try {
            await this.food.destroy({
                where: { id: id }
            })
        } catch (erro) {
            console.error(erro.message)
            throw erro
        }
    }

    async editFood(id, foodData) {
        try {
            const userUpdate = await this.food.update(
                {
                    "name": foodData.name,
                    "manufacturer": foodData.manufacturer,
                    "ingredients": foodData.ingredients,
                    "infoNutritional": foodData.infoNutritional
                },
                { where: { id: id } }
            )
            return userUpdate
        } catch (erro) {
            console.error(erro.message)
            throw erro
        }
    }


}

module.exports = FoodService;