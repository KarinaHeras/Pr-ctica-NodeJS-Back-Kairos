const repository = require('./repository');
const userConstants = require('../users/constants');

exports.getPosts = function () {
    return repository.getAllPosts();
}

exports.getPostById = function (postId) {
    return repository.getPostById(postId);
}

exports.createPost = function (body, user){
    if (user && (user.role === userConstants.ROLES.ADMIN || user.role === userConstants.ROLES.PUBLISHER)) {
        return repository.createPost(body, user.id);
    }

    return Promise.resolve({ error: true, status: 403, message: 'User unauthorized' });
}

exports.deletePostById = async function (postId, user){
    const post = await repository.getPostById(postId);
    if (user.role === userConstants.ROLES.ADMIN || (user.role === userConstants.ROLES.PUBLISHER && user.id === post.author.id)) {
        return repository.deletePostById(postId);
    }
    return Promise.resolve({ error: true, status: 403, message: 'User unauthorized' });
}

exports.modifyPost = async function(postId, user, body){
    const post = await repository.getPostById(postId);
    if (user.role === userConstants.ROLES.ADMIN || (user.role === userConstants.ROLES.PUBLISHER && user.id === post.author.id)) {
        return repository.modifyPost(postId, body);
    }
    return Promise.resolve({ error: true, status: 403, message: 'User unauthorized' });
}

exports.createComment = function(postId, user, body){
    if (user.role === userConstants.ROLES.ADMIN || (user.role === userConstants.ROLES.PUBLISHER && user.id === post.author.id)) {
        return repository.createComment(postId, body);
    }
    return Promise.resolve({ error: true, status: 403, message: 'User unauthorized' });
}

exports.modifyComment = async function(postId, user, commentId, body){
    const post = await repository.getPostById(postId);
    if (user.role === userConstants.ROLES.ADMIN || (user.role === userConstants.ROLES.PUBLISHER && user.id === post.author.id)) {
        return repository.modifyComment(postId, commentId, body);
    }
    return Promise.resolve({ error: true, status: 403, message: 'User unauthorized' });
}

exports.deleteComment = async function(postId, user, commentId) {
    const post = await repository.getPostById(postId);
    if (user.role === userConstants.ROLES.ADMIN || (user.role === userConstants.ROLES.PUBLISHER && user.id === post.author.id)) {
        return repository.deleteComment(postId, commentId);
    }
    return Promise.resolve({ error: true, status: 403, message: 'User unauthorized' });
}