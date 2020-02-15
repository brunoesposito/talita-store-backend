'use strict'

const User = use('App/Models/User');

class UserController {
    async create ({ request, response }) {
        try {
            const data = request.only(['name', 'username', 'email', 'password']);
            const user = await User.create(data);

            return user;
        }catch {
            return response.json({
                message: 'Email já existe'
            })
        }
    }
}

module.exports = UserController;