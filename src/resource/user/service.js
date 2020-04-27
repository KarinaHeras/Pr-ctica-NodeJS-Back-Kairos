'use strict'
const UserRepository = require("./repository")

const UserService = {};

userService.getAll = async () => {
    try {
        return await UserRepository.getAll();   
    } catch (err) {
        console.log(err);
    }
}

UserService.getById = async (id) => {
    try {
        const user = await UserRepository.getById(id);
        return user;
    } catch (err) {
        console.log(err);
    }
}

UserService.addUser = async (user) => {
    try {
        return await UserRepository.addUser(user);
    } catch (err) {
        console.log(err);
    }
}

UserService.updateUser = async (id, user) => {
    try {
        return await UserRepository.updateUser(id, user);
    } catch (err) {
        console.log(err);
    }
}

UserService.deleteUser = async (id) => {
    try{
        return await UserRepository.deleteUser(id);
    }catch(err){
        console.log(err);
    }
}

UserService.addComment = async (id, comment) => {
    try {
        return await UserRepository.addComment(id, comment);
    } catch (err) {
        console.log(err);
    }
}

export default UserService;


