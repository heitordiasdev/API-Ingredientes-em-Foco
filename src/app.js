const express = require("express");
const router = require("./api/router");
const { sequelize } = require('./models')

//APP
const app = express();
app.use(express.json());
app.use('/', router);

//DATABASES
sequelize.sync().then(() => {
    console.log('conectado com o banco de dados.')
})


// PORT
app.listen(3000, () => console.log("App funcionando"));