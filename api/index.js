const express = require('express');

const router = express.Router()


router.get('/',(req, res) => {
    return res.send("App funcionando");
});

module.exports = router