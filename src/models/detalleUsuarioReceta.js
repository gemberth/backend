const { Schema, model } = require('mongoose');

const detalleUsuarioRecetaSchema = new Schema({
  // id: { type: String, required: true },
  
  idUsuario: { type: Schema.Types.ObjectId, ref: 'Usuario'},
  idReceta: { type: Schema.Types.ObjectId, ref: 'Receta'},
  // idReceta: { type: Schema.Types.ObjectId, ref: 'Receta'},
  fecha: { type: Date, default: Date.now },
});

module.exports = model('DetalleUsuarioReceta', detalleUsuarioRecetaSchema);