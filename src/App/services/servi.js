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
function decodeToken(token){
    const decode = new Promise((resolve, reject) =>{
        try{
            const payload = jwt.decode(token, confidb.SECRET_TOKEN)
            if(payload.ex < moment().unix()){
                reject({
                    status: 401,
                    message: 'El token ha expirado'

                })
            }
            resolve(payload.sub)
        }catch(err) {
            reject({
                status: 500,
                message:'invalid Token'
            })

        }
    })

    return decode
}


module.exports = {
    createToken, 
    decodeToken
} 