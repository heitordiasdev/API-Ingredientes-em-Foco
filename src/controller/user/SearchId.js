const { user } = require("../../models");
const UserService = require("../../services/user");
const userService = new UserService(user);

class SearchId {
  async getId(req, res) {
    const id = req.params.id;
    try {
      const selectUser = await userService.getId(id);
      res.status(201).json(selectUser);
    } catch (error) {
      res.status(400).send(error.mensage);
    }
  }
};


module.exports = SearchId