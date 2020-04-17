
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const post = require('../services/service')

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.use('/post', post)







module.exports = Conexion 