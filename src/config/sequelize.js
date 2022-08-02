const Sequelize = require('sequelize')
require('dotenv').config() // importar o dotenv para localizar as variáveis de ambiente

//USAR ESSAS CONFIGURAÇÕES PARA RODAR LOCALMENTE
/*
const dbName = process.env.DB_NAME; // passar os dados do .env para as constantes
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  //passar os dados para o sequelize
  dialect: "postgres", //informar o tipo de banco que vamos utilizar
  host: dbHost, //o host, neste caso estamos com um banco local
});
*/

//USAR ESSAS CONFIGURAÇÕES PARA RODAS NO HEROKU POSTGRESQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
        ssl:{
            require:true,
            rejectUnauthorized: false
            }
         }
      }
  );

sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database', err)
});

module.exports = sequelize