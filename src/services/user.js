const jwt = require('jsonwebtoken')
const authconfig = require('../config/auth.json')

function generateToken(params = {}){
   return jwt.sign(params, authconfig.secret, {
        expiresIn:86400
    });
}

class UserService {
  constructor(UserModel) {
    this.user = UserModel;
  }
  async postAuth(email) {
    try {
      const auth = await this.user.findOne({
        where:{
          email: email
        }
      });
      return auth;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }
  async getAll() {
    try {
      const listUser = await this.user.findAll({attributes: { exclude: ['password'] }});
      return listUser;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

  async getId(id) {
    try {
      const selectUser = await this.user.findByPk(id,{attributes: { exclude: ['password'] }});
      return selectUser;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

  async add(userData) {
    try {
        const newUser = await this.user.create({
        name: userData.name,
        cpfCnpj: userData.cpfCnpj,
        email: userData.email,
        password: userData.password,
        dateNasc: userData.dateNasc,
        typeUser: userData.typeUser,
      });
      newUser.password = undefined;

        return ({
        code: 201,
        message: "Usuário criado com sucesso!",
        data:  newUser,
        token:generateToken({id: newUser.id})});
    } catch (error) {
      if (error.constructor.name == "ValidationError") {
        console.error(error);
        return {
          code: 422,
          message: "Erro ao tentar cadastrar usuário!",
          data: { message_error: error.message },
        };
      } else {
        console.error(error);
        return {
          code: 500,
          message: "Erro ao tentar cadastrar usuário!",
          data: { message_error: error.message },
        };
      }
    }
  }

  async deleteUser(id) {
    try {
      await this.user.destroy({
        where: { id: id },
      });
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }

  async editUser(id, userData) {
    try {
      const userUpdate = await this.user.update(
        {
          name: userData.name,
          cpfCnpj: userData.cpfCnpj,
          email: userData.email,
          password: userData.password,
          dateNasc: userData.dateNasc,
          typeUser: userData.typeUser,
        },
        { where: { id: id } }
      );
      userUpdate.password = undefined;
      return userUpdate;
    } catch (erro) {
      console.error(erro.message);
      throw erro;
    }
  }
}

module.exports = UserService;