'use strict'




//la ruta del schema de user
const user = require('../apps/user')


function getUser (req, res){
    let author_name = req.params.author_name

    user.find(author_name, (err, user) => {
        
    
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err} `}) 
    
            if (user) return res.status(404).send({message: `Error el name de autor no existe`})
            
                res.status(200).send({ user})
            
        
},

function getUser (req, res){
    user.find({}, (err, user => {
        if(err) return res.status(500).send({ message: `Error al realizar la petición`})
        if(!user) return res.send.status(404).send({ menssage: `No existe el user`})
    
       }))
   
       res.status(200, {user: []} )
    
},


function saveUser(req, res){

    console.log('POST/api/user')
    console.log(req.body)

    let user = new user()
    user.email = req.body.email
    user.password = req.body.password
    user.signupDate = req.body.signupDate
    user.lastLogin = req.body.lastLogin
    

    user.save((err, userSchema) => {
        if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `}) 
        
          
            
            res.status(200).send({user: userSchema})
        
    })

},

function updateUser (req, res){
    let nameId = req.params.nameId
  let update = req.body
 user.findByIdAndUpdate(nameId, update, (err, userUpdate =>{
    if (err) res.status(500).send({message: ` Error al actualizar el  user: ${err}`})
    res.status(200).send({ user: userUpdate })
 }) )
},


function deleteUser (req, res){
    let nameId = req.params.nameId
 

 user.find(nameId, (err, nameId) => {
     if (err) res.status(500).send({message: ` Error el buscar el user: ${err}`})
 user.remove( err => {
     if (err) res.status(500).send({message: ` Error el bosar el user: ${err}`})
       res.status(200).send({menssage: `el user ha sido borrado`})


    })
},


module.exports = {
    getUser,
    getUser,
    saveUser,
    updateUser,
    deleteUser

}
















// 'use strict'
// //la ruta del schema de user
// const CommentRepository = require('../comments/repository')
// const user = require('./model')

// const UsersRepository = {};

// UserRepository.getAll = async () => {
//     try {
//         return await User.find({}).select({comments: 0, __v:0});
//     }catch(err) {
//         console.log(err);
//     }
// }

// UserRepository.getById = async (id) => {
//     try {
//         const user = await Users.findById(id).populate('comments');
//         return user;
//     } catch (err) {
//         console.log(err);
//     }
// }

// UserRepository.addUser = async (user) => {
//     const newUser = new Users(user);
//     return await newUser.save();
// }

// UserRepository.updateUser = async (id, user) => {
//     try {
//         let userUpdate = await User.findByIdAndUpdate(id, user, {new: true});
//         return usersUpdate;   
//     } catch (err) {
//         console.log(err);
//     }
// }

// UserRepository.deleteUser = async (id) => {
//     try {
//         let userDelete = await User.findByIdAndDelete(id);
//         return userDelete;
//     } catch (err) {
//         console.log(err);
//     }
// }

// UserRepository.addComment = async (idUser, comment) => {
//     try {
//         const newComment = await CommentRepository.addComment(comment);
//         let userUpdate = await User.findByIdAndUpdate(idUser, {$push: {comments: newComment}}, {new: true});
//         return userUpdate;
//     } catch (err) {
//         console.log(err);
//     }
// }

// export default UserRepository;