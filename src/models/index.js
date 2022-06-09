const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const User = require('./user')
const Food = require('./food')

const user = User(sequelize, Sequelize.DataTypes)
const food = Food(sequelize, Sequelize.DataTypes)

const db = {
    user,
    food,
    sequelize
}

module.exports = db