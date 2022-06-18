class UserService {
  constructor(UserModel) {
    this.user = UserModel
  }

  async getAll() {
    try {
      const listUser = await this.user.findAll()
      return listUser
    } catch (erro) {
      console.error(erro.message)
      throw erro
    }
  }

  async getId(id) {
    try {
      const selectUser = await this.user.findByPk(id)
      return selectUser
    } catch (erro) {
      console.error(erro.message)
      throw erro
    }
  }

  async add(userData) {
    //Verifica se já existe user com o mesmo cpfCnpj
    const user = await this.user.findOne({
      where: {
        cpfCnpj: userData.cpfCnpj
      }
    })
    if (user != null) {
      throw new Error('Já existe um usuário cadastrado com esse CPF/CNPJ!')
    }
    //Verifica se já existe user com o mesmo e-mail
    const mail = await this.user.findOne({
      where: {
        email: userData.email
      }
    })
    if (mail != null) {
      throw new Error('Já existe um usuário cadastrado com esse e-mail!')
    }
    try {
      const newUser = await this.user.create(
        {
          "name": userData.name,
          "cpfCnpj": userData.cpfCnpj,
          "email": userData.email,
          "password": userData.password,
          "dateNasc": userData.dateNasc,
          "typeUser": userData.typeUser
        }
      )
      return newUser
    } catch (erro) {
      console.error(erro.message)
      throw erro
    }
  }

  async deleteUser(id) {
    try {
      await this.user.destroy({
        where: { id: id }
      })
    } catch (erro) {
      console.error(erro.message)
      throw erro
    }
  }

  async editUser(id, userData) {
    try {
      const userUpdate = await this.user.update(
        {
          "name": userData.name,
          "cpfCnpj": userData.cpfCnpj,
          "email": userData.email,
          "password": userData.password,
          "dateNasc": userData.dateNasc,
          "typeUser": userData.typeUser
        },
        { where: { id: id } }
      )
      return userUpdate
    } catch (erro) {
      console.error(erro.message)
      throw erro
    }
  }

}

module.exports = UserService;