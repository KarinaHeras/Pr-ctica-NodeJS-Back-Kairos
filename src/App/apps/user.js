'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')


const commentSchema = new Schema({

    email :{ type: String , unique: true, lowercase: true},
    author_name: String,
    comment_Author_nickname: String,
    Content: String,
    password: {type: String, select: false},
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date
    
})

commentSchema.pre('save', (next) => {
    let user = this
    if (user.isModified('password') ) return next()

    bcrypt.genSalt(10, (err, salt) =>{
        if (err) return next(Error)
        comment.password = Hash
        next()
    })

})

module.exports = mongoose.model('user' commentSchema)