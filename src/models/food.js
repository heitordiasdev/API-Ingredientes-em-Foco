const food = (sequelize, DataTypes) => {
    const Food = sequelize.define('Food', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fabricante: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredientes: {
            type: DataTypes.STRING,
            allowNull: false
        },
        infoNutrional: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName:'food'
    })
}

module.exports = food