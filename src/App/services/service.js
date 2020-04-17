'use strict'
const express = require('express')
const UsuarioControll = require('../controllers/Conexion')
const post = express.Router()




post.get('/usuario',  UsuarioControll.getUsuario )
post.get('/usuario/:nombre_autor', UsuarioControll.getUsuario)
post.post('/usuario', UsuarioControll.saveUsuario)
post.put('/usuario/:nombreId', UsuarioControll.updateUsuario)
post.delete('/nombreId', UsuarioControll.deleteUsuario)


module.exports = post