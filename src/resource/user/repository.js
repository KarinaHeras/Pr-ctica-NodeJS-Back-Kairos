'use strict'
//la ruta del schema de user
const CommentRepository = require('../comments/repository')
const user = require('./model')

const UsersRepository = {};

UserRepository.getAll = async () => {
    try {
        return await User.find({}).select({comments: 0, __v:0});
    }catch(err) {
        console.log(err);
    }
}

UserRepository.getById = async (id) => {
    try {
        const user = await Users.findById(id).populate('comments');
        return user;
    } catch (err) {
        console.log(err);
    }
}

UserRepository.addUser = async (user) => {
    const newUser = new Users(user);
    return await newUser.save();
}

UserRepository.updateUser = async (id, user) => {
    try {
        let userUpdate = await User.findByIdAndUpdate(id, user, {new: true});
        return usersUpdate;   
    } catch (err) {
        console.log(err);
    }
}

UserRepository.deleteUser = async (id) => {
    try {
        let userDelete = await User.findByIdAndDelete(id);
        return userDelete;
    } catch (err) {
        console.log(err);
    }
}

UserRepository.addComment = async (idUser, comment) => {
    try {
        const newComment = await CommentRepository.addComment(comment);
        let userUpdate = await User.findByIdAndUpdate(idUser, {$push: {comments: newComment}}, {new: true});
        return userUpdate;
    } catch (err) {
        console.log(err);
    }
}

export default UserRepository;