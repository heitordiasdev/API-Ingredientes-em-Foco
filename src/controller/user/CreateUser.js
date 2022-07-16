const { user } = require("../../models");
const UserService = require("../../services/user");
const userService = new UserService(user);

class CreateUser {
  async add(req, res) {
    const { name, cpfCnpj, email, password, dateNasc, typeUser } = req.body;
    try {
      const newUser = await userService.add({
        name,
        cpfCnpj,
        email,
        password,
        dateNasc,
        typeUser,
      });
      newUser.password = undefined;
      res
      .status(newUser.code)
      .json({ message: newUser.message, data: newUser.data });
    } catch (error) {
      res.status(400).send(error.mensage);
    }
  }
};

module.exports = CreateUser