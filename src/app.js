const express = require("express");
const router = require("./api/router");
const path = require("path");
const { sequelize } = require("./models");

//APP
const app = express();
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
const link = "http://localhost:3000";
app.listen(3000, () => {
  console.log(`App funcionando, acesse: ${link}`);
});