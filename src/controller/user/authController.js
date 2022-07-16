
const { user } = require("../../models");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authconfig = require('../../config/auth.json')
const AuthService = require("../../services/user");
const authService = new AuthService(user);

function generateToken(params = {}){
    return jwt.sign(params, authconfig.secret, {
         expiresIn:86400
     });
 }
class Authenticate{
    async postAuth(req,res) {
        const { email, password} = req.body;
        const user = await authService.postAuth( email)

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        if (password !== user.password)
            return res.status(400).send({ error: 'Invalid password' })

        user.password = undefined;
        res.send({
            user,
            token: generateToken({ id: user.id })
        })
    }
}

module.exports = Authenticate