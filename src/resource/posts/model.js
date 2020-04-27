'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    nameAuthor: {type: 'String'},
    nickname: {type: 'String'},
    title: {type: 'String', required: true},
    content: {type: 'String'},
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comments'
    }]
}, {collection: 'post'})

export default mongoose.model('post', PostSchema);