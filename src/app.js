const express = require("express");
const router = require("./api");
const { sequelize } = require('./models')

const app = express();

app.use(express.json());
app.use('/', router);

sequelize.sync().then(() => {
    console.log('conectado com o banco de dados.')
})



app.listen(3000, () => console.log("App funcionando"));