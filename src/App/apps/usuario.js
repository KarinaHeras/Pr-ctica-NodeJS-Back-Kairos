'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    author_name: String,
    nickname: String,
    title: String,
    text: String,
    commentary: String,
    comment:{ type: String, enum: ['nicknameAutor', 'contenido', 'feha']}
 
})

module.exports = mongoose.model('user', userSchema)
