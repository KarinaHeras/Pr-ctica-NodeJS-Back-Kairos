'use strict'

const mongoose = require('mongoose')
const user = require('../apps/user')
const service = require('./service')

function sigUp( req, res){
 const user = new ({
 email: req.body.email,
 password: req.password
 })

 user.save((err) =>{
     if(err) res.status(500).send({message: `Error al crear el comentario: ${err}`})
        return res.status(200).send({ token: Service.createToken(user)})
    })
}

function sigIn( req, res){

user.find({email: req.body.email}, (err, user){
    if(err) return res.status(500).send({message: 'err'})
    if(!user) return res.status(404).send({message: 'No existe el usuario'})
    
    req.user = user
    res.status(200).send({message: 'Te has registrado correctamente'})
}) 
singUp.methods.isValidPassword = async function (password) {
    return await bcrypt.compareTo(password, this.password);
}


}

module.exports = {
    sigUp,
    sigIn
}