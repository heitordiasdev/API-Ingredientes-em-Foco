const express = require("express");
const router = require("./api/router");
const path = require("path");
const { sequelize } = require("./models");
const cors = require("cors");

//APP
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

//VIEWS
app.set('views', path.resolve(__dirname, 'views'));
app.set("view engine", "ejs");

//DATABASES
sequelize.sync().then(() => {
  console.log("conectado com o banco de dados.");
});

// PORT
const link = "http://localhost:8080";
app.listen(8080, () => {
  console.log(`App funcionando, acesse: ${link}`);
});