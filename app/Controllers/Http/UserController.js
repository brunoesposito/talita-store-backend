'use strict'

const Bull = use('Rocketseat/Bull');
const Job = use('App/Jobs/CreateUser');

class UserController {
    async create ({ request, response }) {
        try {
            const data = request.only(['name', 'username', 'email', 'password']);

            Bull.add(Job.key, data)
        }catch {
            return response.json({
                message: 'Email já existe'
            })
        }
    }
}

module.exports = UserController;