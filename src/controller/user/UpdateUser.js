const { user } = require("../../models");
const UserService = require("../../services/user");
const userService = new UserService(user);

class UpdateUser {
    async editUser(req, res) {
        const { name, cpfCnpj, email, password, dateNasc, typeUser } = req.body;
        const id = req.params.id;
        try {
            const userupdated = await userService.editUser(id, {
                name,
                cpfCnpj,
                email,
                password,
                dateNasc,
                typeUser,
            });
            res.status(201).send("Usuário atualizado com sucesso!");
        } catch (error) {
            res.status(400).send(error.mensage);
        }
    }
};

module.exports = UpdateUser