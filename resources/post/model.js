const mongoose = require('mongoose');

// Define Schemas.
const commentSchema = new mongoose.Schema({
    nickname: String,
    content: String,
    date: { type: Date, default: Date.now }    
});

const postSchema = new mongoose.Schema({
    author: { type: 'ObjectId', ref: 'User' },
    nickname: String,
    title: String,
    text: String,
    comments: [commentSchema]
});

// Generate Schema Model.
module.exports = mongoose.model('Post', postSchema);
