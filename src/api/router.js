const express = require('express');
const router = express.Router()

const home = require('../controller/home');
const food = require('../controller/food');
const users = require('../controller/users');

router.get('/', home.paginaHome);
router.get('/food', food.paginaFood);
router.get('/users', users.paginaUsers);

// router.get('/',(req, res) => {
//     return res.send("App funcionando");
// });

module.exports = router