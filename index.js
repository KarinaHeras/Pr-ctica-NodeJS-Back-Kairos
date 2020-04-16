'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


//la ruta del schema de usuario
const Usuario = require('./models/usuario')


const app = express()
const port = process.env.PORT || 3001


app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.get('/api/usuario', (req, res) => {
    res.status(200, {usuario: []} )

})

app.get('/api/usuario/:nombre_autor', (req, res) =>{
let nombre_autor = req.params.nombre_autor

Usuario.find(nombre_autor, (err, usuario) => {

    if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err} `}) 

        if (usuario) return res.status(404).send({message: `Error el nombre de autor no existe`})
        
            res.status(200).send({ usuario})
        
    
})

})



app.post('api/usuario', (req, res) => {
    console.log('POST/api/usuario')
    console.log(req.body)

    let usuario = new Usuario()
    usuario.nombre_autor = req.body.nombre_autor
    usuario.nickname_autor = req.body.nickname_autor
    usuario.titulo = req.body.titulo
    usuario.texto = req.body.texto
    usuario.comentarios = req.body.comentarios
    usuario.commet = re.body.commet

    usuario.save((err, UsuarioSchema) => {
        if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `}) 
        
          
            
            res.status(200).send({usuario: UsuarioSchema})
        
    })
     

})

app.put('/api/usuario/:nombreId', (req, res) => {
 let nombreId = req.params.nombreId
  let update = req.body
 Usuario.findByIdAndUpdate(nombreId, update, (err, usuarioUpdate =>{
    if (err) res.status(500).send({message: ` Error al actualizar el  usuario: ${err}`})
    res.status(200).send({ usuario: usuarioUpdate })
 }) )

})
app.delete('/api/nombreId', (req, res) =>{
 let nombreId = req.params.nombreId
 

 Usuario.find(nombreId, (err, nombreId) => {
     if (err) res.status(500).send({message: ` Error el buscar el usuario: ${err}`})
 usuario.remove( err => {
     if (err) res.status(500).send({message: ` Error el bosar el usuario: ${err}`})
       res.status(200).send({menssage: `el usuario ha sido borrado`})


    })
})

mongoose.connect('mongodb://localhost:27017/usuario', (err, res) => {
    if(err){
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    
    console.log('La conexion a la base de datos establecida ')

    app.listen(port, () => {
        console.log(`API Rest corriendo en  http://localhost:${port}`)
    })
})
