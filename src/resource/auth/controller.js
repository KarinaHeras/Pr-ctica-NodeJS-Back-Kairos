'use strict'
//la ruta del schema de user
const user = require('../apps/user')
const mongoose = require('mongoose')

const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const UserModel = require('../model/model');

// Crea un middleware de pasaporte para manejar el registro de usuarios
passport.use('signup', new localStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, async (email, password, done) => {
    try {
      //Save the information provided by the user to the the database
      const user = await UserModel.create({ email, password });
      //Send the user information to the next middleware
      return done(null, user);
    } catch (error) {
      done(error);
    }
}));

//Create a passport middleware to handle User login
passport.use('login', new localStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, async (email, password, done) => {
  try {

// Encuentra el usuario asociado con el correo electrónico proporcionado
    const user = await UserModel.findOne({ email });
    if( !user ){

// Si el usuario no se encuentra en la base de datos, devuelve un mensaje
      return done(null, false, { message : 'User not found'});
    }
// Valide la contraseña y asegúrese de que coincida con el hash correspondiente almacenado en la base de datos
    // Si las contraseñas coinciden, devuelve un valor de verdadero.
    const validate = await user.isValidPassword(password);
    if( !validate ){
      return done(null, false, { message : 'Wrong Password'});
    }

// Enviar la información del usuario al middleware
    return done(null, user, { message : 'Logged in Successfully'});
  } catch (error) {
    return done(error);
  }
}));
    