import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

let rolesValidos = {
values: ["ADMIN", "PUBLISHER"],
message: '{VALUE} no es un role válido'
}
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
nombre: {
type: String,
required: [true, 'El nombre es necesario'],
},
email: {
type: String,
unique: true,
required: [true, "El correo es necesario"],
},
password: {
type: String,
required: [true, "Le contraseña es obligatoria"],
},
role: {
type: String,
default: 'ADMIN',
required: [true],
enum: rolesValidos,
},
});


// elimina la key password del objeto que retorna al momento de crear un usuario
usuarioSchema.methods.toJSON = function() {
let user = this;
let userObject = user.toObject();
delete userObject.password;
return userObject;
}

usuarioSchema.plugin(uniqueValidator, {
message: '{PATH} debe de ser único'
})
export default mongoose.model('Users', usuarioSchema)