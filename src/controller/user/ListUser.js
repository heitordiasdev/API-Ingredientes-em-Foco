const { user } = require("../../models");
const UserService = require("../../services/user");
const userService = new UserService(user);

class ListUser {
  async getAll(req, res) {
    try {
      const listUser = await userService.getAll()
      res.status(201).json(listUser);
    } catch (error) {
      res.status(400).send(error.mensage);
    }
  }
};

module.exports = ListUser