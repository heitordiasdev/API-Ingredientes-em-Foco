const user = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
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
        cpfCnpj: {
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
            allowNull: false
        },
        dateNasc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        typeUser: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

    }, {
        tableName: 'user'
    })

    return User
}

module.exports = user