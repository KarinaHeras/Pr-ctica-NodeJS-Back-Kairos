'use strict'

const roles = require('./load_admins');
const User = require('./model');

const UsersRepository = {};

UsersRepository.getAllAdmins = async () => {
    return await User.find({role: roles.Roles.admin});
}

UsersRepository.getByUsername = async (username) => {
    const user = await User.findOne({username});
    return user;
}

UsersRepository.addUser = async function(user) {
    const newUser = new User(user);
    return await newUser.save();
}

module.exports= UsersRepository;