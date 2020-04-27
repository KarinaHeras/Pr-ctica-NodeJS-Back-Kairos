'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserShema =  new Schema ({

    user: {
        type: String,
        required: true,
        index: { unique: true },
        password: Straing 
    
        }
    

})


    module.exports = mongoose.model('user', UserShema);