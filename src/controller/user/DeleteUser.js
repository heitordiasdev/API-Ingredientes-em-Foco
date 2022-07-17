const { user } = require("../../models");
const UserService = require("../../services/user");
const userService = new UserService(user);

class DeleteUser {
  async deleteUser(req, res) {
    const id = req.params.id;
    try {
      await userService.deleteUser(id);
      res.status(201).send("Usuário deletado com sucesso!");
    } catch (error) {
      res.status(400).send(error.mensage);
    }
  }
};

module.exports = DeleteUser