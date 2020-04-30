'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const roles = require('./load_admins')
const User = require('../model/User') 

const userSchema = new Schema({
    name: String,
    email: {
      type: String, 
      require: true, 
      unique: true,
    },
    role: { type: 'String', enum: [roles.Roles.admin, roles.Roles.publisher, ] }
}, { collection: 'users' });


UserSchema.pre('save', async function(next){
  //'esto 'se refiere  al punto de guardarse
  const user = this;
  //Hash la contraseña de 10 digitos
  const hash = await bcrypt.hash(this.password, 10);
  //// Reemplaze la contraseña  hash y luego guárdela
  this.password = hash;
  //Indica que hemos terminado y pasa al siguiente middleware
  next();
});

// Usaremos esto más adelante para asegurarnos de que el usuario que intenta iniciar sesión tenga las credenciales correctas
UserSchema.methods.isValidPassword = async function(password){
  const user = this;
  
// Comprueba la contraseña enviada por el usuario para iniciar sesión y comprueba si la contraseña almacenada en ella bbdd
  const compare = await bcrypt.compare(password, user.password);
  return compare;
}

const UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel; 


module.exports = mongoose.model('user' userSchema)