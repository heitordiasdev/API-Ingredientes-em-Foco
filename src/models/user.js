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
            type: DataTypes.STRING,
            unique: {args: true, msg: "O CPF/CNPJ já foi cadastrado"},
            allowNull: false,
            validate : {
                notNull: {args: true, msg: "O campo CPF/CNPJ é obrigatório"},
                notEmpty: {args: true, msg: "O campo CPF/CNPJ é obrigatório"},
                isValid(value){
                    let cpfCnpjNum = value.replace(/[.-/-]/g, '')
                    if(cpfCnpjNum.length==11){
                        let sum;
                        let res;
                        sum = 0;
                        if (cpfCnpjNum == "00000000000") throw new Error(' CPF inválido');
                        if (cpfCnpjNum == "11111111111") throw new Error(' CPF inválido');
                        if (cpfCnpjNum == "22222222222") throw new Error(' CPF inválido');
                        if (cpfCnpjNum == "33333333333") throw new Error(' CPF inválido');
                        if (cpfCnpjNum == "44444444444") throw new Error(' CPF inválido');
                        if (cpfCnpjNum == "55555555555") throw new Error(' CPF inválido');
                        if (cpfCnpjNum == "66666666666") throw new Error(' CPF inválido');
                        if (cpfCnpjNum == "77777777777") throw new Error(' CPF inválido');
                        if (cpfCnpjNum == "88888888888") throw new Error(' CPF inválido');
                        if (cpfCnpjNum == "99999999999") throw new Error(' CPF inválido');

                        for (i=1; i<=9; i++){
                            sum = sum + parseInt(cpfCnpjNum.substring(i-1, i)) * (11 - i);
                            res = (sum * 10) % 11;
                        } 
                        if ((res == 10) || (res == 11)){ res = 0; }
                        if (res != parseInt(cpfCnpjNum.substring(9, 10)) ){ throw new Error(' CPF inválido');}

                        sum = 0;
                        for (i = 1; i <= 10; i++){ 
                            sum = sum + parseInt(cpfCnpjNum.substring(i-1, i)) * (12 - i);
                            res = (sum * 10) % 11;
                        }
                        if ((res == 10) || (res == 11)){ res = 0;}
                        if(res != parseInt(cpfCnpjNum.substring(10, 11))) {throw new Error(' CPF inválido')}

                    }else if(cpfCnpjNum.length==14){
                        if (cpfCnpjNum == "00000000000000") throw new Error(' CNPJ inválido'); 
                        if (cpfCnpjNum == "11111111111111") throw new Error(' CNPJ inválido'); 
                        if (cpfCnpjNum == "22222222222222") throw new Error(' CNPJ inválido'); 
                        if (cpfCnpjNum == "33333333333333") throw new Error(' CNPJ inválido'); 
                        if (cpfCnpjNum == "44444444444444") throw new Error(' CNPJ inválido'); 
                        if (cpfCnpjNum == "55555555555555") throw new Error(' CNPJ inválido'); 
                        if (cpfCnpjNum == "66666666666666") throw new Error(' CNPJ inválido'); 
                        if (cpfCnpjNum == "77777777777777") throw new Error(' CNPJ inválido'); 
                        if (cpfCnpjNum == "88888888888888") throw new Error(' CNPJ inválido'); 
                        if (cpfCnpjNum == "99999999999999") throw new Error(' CNPJ inválido');
                        let leng = cpfCnpjNum.length - 2
                        let num = cpfCnpjNum.substring(0,leng);
                        let dv = cpfCnpjNum.substring(leng);
                        let sum = 0;
                        pos = leng - 7;
                        for (i = leng; i >= 1; i--) {
                            sum += num.charAt(leng - i) * pos--;
                            if (pos < 2) pos = 9;
                        }
                        resultado = sum % 11 < 2 ? 0 : 11 - sum % 11;
                        if (resultado != dv.charAt(0))  throw new Error(' CNPJ inválido');
                        leng = leng + 1;
                        num = cpfCnpjNum.substring(0,leng);
                        sum = 0;
                        pos = leng - 7;
                        for (i = leng; i >= 1; i--) {
                            sum += num.charAt(leng - i) * pos--;
                            if (pos < 2)
                                pos = 9;
                        }
                        resultado = sum % 11 < 2 ? 0 : 11 - sum % 11;
                        if (resultado != dv.charAt(1))  throw new Error(' CNPJ inválido');
                    }else{
                        throw new Error(' CPF/CNPJ inválido')
                    }
                }
            }
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