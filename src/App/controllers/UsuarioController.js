
'use strict'




//la ruta del schema de usuario
const Usuario = require('../apps/usuario')


function getUsuario (req, res){
    let nombre_autor = req.params.nombre_autor

    Usuario.find(nombre_autor, (err, usuario) => {
        
    
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err} `}) 
    
            if (usuario) return res.status(404).send({message: `Error el nombre de autor no existe`})
            
                res.status(200).send({ usuario})
            
        
}

function getUsuario (req, res){
    Usuario.find({}, (err, usuario => {
        if(err) return res.status(500).send({ message: `Error al realizar la petición`})
        if(!usuario) return res.send.status(404).send({ menssage: `No existe el Usuario`})
    
       }))
   
       res.status(200, {usuario: []} )
    
}


function saveUsuario(req, res){

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

}

function updateUsuario (req, res){
    let nombreId = req.params.nombreId
  let update = req.body
 Usuario.findByIdAndUpdate(nombreId, update, (err, usuarioUpdate =>{
    if (err) res.status(500).send({message: ` Error al actualizar el  usuario: ${err}`})
    res.status(200).send({ usuario: usuarioUpdate })
 }) )
}


function deleteUsuario (req, res){
    let nombreId = req.params.nombreId
 

 Usuario.find(nombreId, (err, nombreId) => {
     if (err) res.status(500).send({message: ` Error el buscar el usuario: ${err}`})
 usuario.remove( err => {
     if (err) res.status(500).send({message: ` Error el bosar el usuario: ${err}`})
       res.status(200).send({menssage: `el usuario ha sido borrado`})


    })
}


module.exports = {
    getUsuario,
    getUsuario,
    saveUsuario,
    updateUsuario,
    deleteUsuario

}