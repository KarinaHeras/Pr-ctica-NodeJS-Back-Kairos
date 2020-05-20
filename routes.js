const express = require('express');
const bodyParser = require('body-parser');
const postController = require('./resources/post/controller');
const offensiveWordsController = require('./resources/offensiveWords/controller');
const loginController = require('./resources/login/controller');
const userController = require('./resources/users/controller');

exports.initialize = function (app) {
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/posts', postController.router);
    app.use('/offensive-words', offensiveWordsController.router);
    app.use('/login', loginController.router);
    app.use('/users', userController.router);
}