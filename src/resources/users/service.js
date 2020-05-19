import repository from "./repository";



exports.createUser = function (body) {
    return repository.createUser(body);
}

exports.deleteUserById = function (userId) {
    return repository.deleteUserById(userId);
}

exports.verifyUser = async function (username, password, done) {
    repository.findUser(username, password).then((user) => {
        return user
            ? done(null, user)
            : done(null, false);
    });
}