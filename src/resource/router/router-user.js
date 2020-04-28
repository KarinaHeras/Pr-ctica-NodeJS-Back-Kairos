'use strict'
const express = require('express')
const user = require('../controllers/Conexion')
const post = express.Router()
const userContr = require('../controllers/user')
const auth = require('../../minddlewares/auth')


post.get('/user',  user.getuser)
post.get('/user/:author_name', user.getuser)
post.post('/user',auth, user.saveuser)
post.put('/user/:nameId',auth, user.updateuser)
post.delete('/nameId', auth, user.deleteuser)
post.post('/sigUp' , userContr, sigUp)
post.post('/sinIn', userContr, sinIn)
post.get('/private',auth, (req, res) => {
    res.status(200).send({message: 'Tienes acceso'})
})


module.exports = post