const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userConstants = require('./constants');

// Define Schemas.
const UserSchema = new mongoose.Schema({
    username: {
      type : String,
      required : true,
      unique: true
    },
    password: {
      type : String,
      required : true
    },
    role: {
      type: String,
      enum: [userConstants.ROLES.ADMIN, userConstants.ROLES.PUBLISHER]
    }
});

UserSchema.pre('save', async function(next){
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.isValidPassword = async function(password){
  return await bcrypt.compare(password, this.password);
}

// Generate Schema Model.
module.exports = mongoose.model('User', UserSchema);