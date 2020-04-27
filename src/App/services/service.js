'use strict'
const express = require('express')
const userControll = require('../controllers/Conexion')
const post = express.Router()
const userContr = require('../controllers/user')
const auth = require('../../minddlewares/auth')




post.get('/user',  userControll.getuser)
post.get('/user/:author_name', userControll.getuser)
post.post('/user',auth, userControll.saveuser)
post.put('/user/:nameId',auth, userControll.updateuser)
post.delete('/nameId', auth, userControll.deleteuser)
post.post('/sigUp' , userContr, sigUp)
post.post('/sinIn', userContr, sinIn)
post.get('/private',auth, (req, res) => {
    res.status(200).send({message: 'Tienes acceso'})
})


module.exports = post