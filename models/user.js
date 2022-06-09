const user = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        name:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        cpfCnpj:{
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        dateNasc:{
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },{
        tableName: 'user'
    })

    return User
}

module.exports = user