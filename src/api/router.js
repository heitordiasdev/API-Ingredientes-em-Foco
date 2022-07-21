const express = require('express');
const router = express.Router()
const { body } = require("express-validator");

const Authenticate = require('../controller/user/authController')
const authenticate = new Authenticate()

const auth = require('../middleware/login')

router.post('/user/authenticate', authenticate.postAuth);

const ListUser = require('../controller/user/ListUser')
const SearchIdU = require('../controller/user/SearchId')
const CreateUser = require('../controller/user/CreateUser')
const DeleteUser = require('../controller/user/DeleteUser')
const UpdateUser = require('../controller/user/UpdateUser')
//! USER
const listUser = new ListUser()
const searchIdU = new SearchIdU()
const createUser = new CreateUser()
const deleteUser = new DeleteUser()
const updateUser = new UpdateUser()
router.get("/user", listUser.getAll)
router.get("/user/:id", searchIdU.getId)
router.post("/user", createUser.add)
router.delete("/user/:id", deleteUser.deleteUser)
router.put("/user/:id", updateUser.editUser)

//! FOOD

const ListProducts = require('../controller/food/ListProducts');
const SearchIdF = require('../controller/food/SearchId');
const ContainsIngredient = require('../controller/food/ContainsIngredient')
const NoContainIngredient = require('../controller/food/NoContainIngredient');
const CreateProduct = require('../controller/food/CreateProduct');
const ProductDelete = require('../controller/food/ProductDelete');
const UpdateProduct = require('../controller/food/UpdateProduct');
const FilterFood = require('../controller/food/FilterFood')
const FilterFoodIngredient = require('../controller/food/FilterFoodIngredient')
const FilterNotIngredient = require('../controller/food/FilterNotIngredient')

const listProducts = new ListProducts();
const searchIdF = new SearchIdF();
const containsIngredient = new ContainsIngredient();
const noContainIngredient = new NoContainIngredient();
const createProduct = new CreateProduct();
const productDelete = new ProductDelete();
const updateProduct = new UpdateProduct();
const filterFoods = new FilterFood()
const filterFoodIngredient = new FilterFoodIngredient()
const filterNotIngredient = new FilterNotIngredient
router.get("/foodFilter/:food", filterFoods.filterFoods);
router.get("/foodFilterContainIngredient/:food/:ingredient", filterFoodIngredient.filterFoodIngredient)
router.get("/foodFilterNoContainIngredient/:food/:ingredient", filterNotIngredient.filterNotIngredient)
router.get('/food', listProducts.getAll);
router.get('/food/:id', searchIdF.getId);
router.get("/food/filterContainIngredient/:ingredient", containsIngredient.filterIngredient);
router.get("/food/filterNoContainIngredient/:ingredient", noContainIngredient.filterNoContainIngredient);

router.post("/food",
  body("name").not().isEmpty().withMessage("O campo nome deve ser preenchido!"),
  body("manufacturer")
    .not()
    .isEmpty()
    .withMessage("O campo fabricante deve ser preenchido!"),
  body("ingredients")
    .not()
    .isEmpty()
    .withMessage("O campo ingredientes deve ser preenchido!"),
  body("infoNutritional")
    .not()
    .isEmpty()
    .withMessage("O campo informações nutricionais deve ser preenchido!"), createProduct.addFood);

router.delete("/food/:id", productDelete.deleteFood);
router.put("/food/:id", updateProduct.editFood);













module.exports = router