'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = Schema({
    nombre_autor: String,
    nickname_autor: String,
    titulo: String,
    texto: String,
    comentarios: String,
 
})

module.exports = mongoose.model('Usuario', UsuarioSchema)
