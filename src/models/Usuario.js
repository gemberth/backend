const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    nombre:{type:String},
    edad:{type:Number},
    fechaNacimiento:{type:Date},
    email:{type:String},
    password:{type:String},
    pesoInicial:{type:Number},
});


usuarioSchema.methods.toJSON = function(){
    let usuario = this.toObject();
    delete usuario.password;
    return usuario;
}
usuarioSchema.methods.comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = model('Usuario', usuarioSchema);
