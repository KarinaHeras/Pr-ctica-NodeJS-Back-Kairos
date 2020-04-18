'use strict'

const mongoose = require('mongoose')
const user = require('../apps/user')
const servi = require('../services/servi')

function signUp( req, res){
 const user = new ({
 email: req.body.email,
 author_name: req.body.autor_name,
 comment_Author_nickname: req.body.comment_Author_nickname,
 Content: req.body.Content
 })

 user.saev((err) =>{
     if(err) res.status(500).send({message: `Error al crear el comentario: ${err}`})
        return res.status(200).send({ token: Service.createToken(user)})
    })
}

function signIn( req, res){



}

module.exports = {
    signUp,
    signIn
}