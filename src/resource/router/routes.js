'use strict'
const express = require('express')
const CommentController = require( './resources/comments/controller');
const helloController = require('./resources/hello/controller')
const  OffensiveWordController = require ('./resources/offensivewords/controller')
const postController = require('./resources/post/controller')
const auth = require('../../minddlewares/auth')
const useContr = require('../../App/controllers/user')
const userControll = require('../controllers/Conexion')
const userContr = require('../controllers/user')

export default app => {
    app.use('/hello', helloController);
    app.use('/post', postController);
    app.use('/comment', CommentController);
    app.use('/offensivewords', OffensiveWordController);
    app.use('/auth', AuthController);
    app.use('/users', UsersController);
}




