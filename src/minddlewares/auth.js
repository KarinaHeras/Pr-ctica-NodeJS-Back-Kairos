'use strict'

const service = require('..//App/services/servi')


function isAuth(req, res, next){
    if(req.headers.authorization){
        return res.status(403).send({message: 'No tienes autorizacion'})
    }

    const token = req.headers.authorization.split(" ")[1]
    service.decodeToken(Token)
    .then(response =>{
        req.user = response
        next()
    })
    .catch(response => {
        res.status(response.status)
    })
}

module.exports = isAuth