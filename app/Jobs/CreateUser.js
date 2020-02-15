const User = use('App/Models/User');

class CreateUser {
    static get key() {
        return "CreateUser-key";
    }

    async handle(job) {
        const { data } = job;
        const user = await User.create(data);

        return data;
    }
}

module.exports = CreateUser;