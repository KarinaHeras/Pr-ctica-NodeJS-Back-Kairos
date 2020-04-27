'use strict'
const express = require('express')
const CommentController = require( './resources/comments/controller');
const helloController = require('./resources/hello/controller')
const  OffensiveWordController = require ('./resources/offensivewords/controller')
const postController = require('./resources/post/controller')
const auth = require('./src/minddlewares/auth')
const useContr = require('./src/App/controllers/user')
const userControll = require('../controllers/Conexion')
const userContr = require('../controllers/user')

export default app => {
    app.use('/hello', helloController);
    app.use('/post', postController);
    app.use('/comment', CommentController);
    app.use('/offensivewords', OffensiveWordController);
   
}
// user
post.get('/user',  userControll.getuser)
post.get('/user/:authorName', userControll.getuser)
post.post('/user',auth, userControll.saveuser)
post.put('/user/:nameId',auth, userControll.updateuser)
post.delete('/nameId', auth, userControll.deleteuser)
post.post('/sigUp' , userContr, sigUp)
post.post('/sinIn', userContr, sinIn)
post.get('/private',auth, (req, res) => {
    res.status(200).send({message: 'Tienes acceso'})
})


module.exports = post