'use strict'


const mongoose = require('mongoose')
const conexion = require('../../controllers/Conexion')
const port = process.env.PORT || 3001


mongoose.connect('mongodb://localhost:27017/usuario', (err, res) => {
    if(err){
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    
    console.log('La conexion a la base de datos establecida ')

    app.listen(port, () => {
        console.log(`API Rest corriendo en  http://localhost:${port}`)
    })
})


module.exports = api
