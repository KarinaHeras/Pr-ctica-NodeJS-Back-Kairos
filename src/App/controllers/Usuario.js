
'use strict'




//la ruta del schema de usuario
const Usuario = require('./models/usuario')


function getUsuario (Id){

}

function getUsuario (req, res){
    Usuario.find({}, (err, usuario => {
        if(err) return res.status(500).send({ message: `Error al realizar la petición`})
        if(!usuario) return res.send.status(404).send({ menssage: `No existe el Usuario`})
    
       }))
   
       res.status(200, {usuario: []} )
    
}

function updateUsuario (Id){
    
}


function deleteUsuario (Id){
    
}


exports = {
    getUsuario,
    getUsuario,
    updateUsuario,
    deleteUsuario,

}