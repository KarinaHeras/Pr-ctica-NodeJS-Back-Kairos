'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')


const userSchema = new Schema({

    email :{ type: String , unique: true, lowercase: true},
    password: {type: String, select: false},
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date
    
})

userchema.pre('save', (next) => {
    let user = this
    if (user.isModified('password') ) return next()

    bcrypt.genSalt(10, (err, salt) =>{
        if (err) return next(Error)
        user.password = Hash
        next()
    })

})

module.exports = mongoose.model('user' userSchema)