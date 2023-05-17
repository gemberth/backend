const { model, Schema } = require("mongoose");

const recetaSchema = new Schema({ // id: { type: String, required: true },
  
  descripcion: { type: String },
  caloria: { type: String },
  categoria: { type: String },
  preparacion: { type: String },
  lfoto: { type: String },
  fecha: { type: Date , default: Date.now },

  idUsuarioCreado: {type: Schema.Types.ObjectId},
  idUsuarioUtilizado: {type: Schema.Types.ObjectId},
  recetaUsada: {type:Boolean}
  
});

module.exports = model("Receta", recetaSchema);
