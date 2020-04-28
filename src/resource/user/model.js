'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const roles = require('./ load_admins')


const userSchema = new Schema({

    email :{ type: String , unique: true, lowercase: true},
    password: {type: String, select: false},
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date,
    role: { type: 'String', enum: [roles.Roles.admin, roles.Roles.publisher, ] }
}, { collection: 'users' });

userSchema.pre('save', (next) => {
    let user = this
    if (user.isModified('password') ) return next()

    bcrypt.genSalt(10, (err, salt) =>{
        if (err) return next(Error)
        user.password = Hash
        next()
    })



    UserSchema.pre('save', async function (next) {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    });
    
    UserSchema.methods.isValidPassword = async function (password) {
        return await bcrypt.compare(password, this.password);
    }

})

module.exports = mongoose.model('user' userSchema)