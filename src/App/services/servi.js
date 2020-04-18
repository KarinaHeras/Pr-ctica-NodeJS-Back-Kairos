'use strict'


const jwt = require('jwt-simple')

const moment = require('moment')

function createToken (user){

    const payload = {
        sub: user._id,
        ait: moment().unix(),
        exp: moment().add(30, 'days').unix(),


    }

     return jwt.encode(payload, confidb.SECRET_TOKEN)

}

module.exports = createToken