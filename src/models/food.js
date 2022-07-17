
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
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        infoNutritional: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'food'
    })
    
  
    return Food
}

module.exports = food