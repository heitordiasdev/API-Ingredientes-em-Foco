const express = require('express');

const foodRouter = require('../controller/food')
const userRouter = require('../controller/users')

const router = express.Router()


router.get('/',(req, res) => {
    return res.send("App funcionando");
});

router.use('/food', foodRouter)
router.use('/user',userRouter)

module.exports = router