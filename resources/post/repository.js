const Post = require('./model');

exports.getAllPosts = function () {
    return Post.find({}, 'author title text').populate({ path: 'author', select: 'username -_id' }).exec();
}

exports.getPostById = function(postId) {
    return Post.findById(postId, 'author title text comments').populate({ path: 'author', select: 'username _id' }).exec();
}

exports.createPost = function(body, userId) {
   return Post.create({ ...body, author: userId });
}

exports.deletePostById = function(postId) {
    return Post.findByIdAndDelete(postId).exec();
}

exports.modifyPost = function(postId, body) {
    return Post.findByIdAndUpdate(postId, body);
}

exports.createComment = function(postId, body) {
    return Post.findByIdAndUpdate(postId, { $push: { comments: body } }).exec();
}

exports.modifyComment = function(postId, commentId, body) {
    return Post.findOneAndUpdate(
        { _id: postId, 'comments._id': commentId },
        { $set: {
            'comments.$.nickname': body.nickname || undefined,
            'comments.$.content': body.content
        } },
        { omitUndefined: true }
    ).exec();
}

exports.deleteComment = function(postId, commentId) {
    return Post.findByIdAndUpdate(postId, {$pull: { comments: { _id: commentId} } }).exec();
}