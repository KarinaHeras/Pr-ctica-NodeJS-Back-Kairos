const User = require('./model');

exports.findUser = function(username, password) {
    return User.findOne({ username }).exec().then(async function (user) {
        return user && await user.isValidPassword(password)
            ? user
            : null;
    });
}

exports.createUser = function(body) {
    return User.create(body);
}

exports.deleteUserById = function(userId) {
    return User.findByIdAndDelete(userId).exec();
}