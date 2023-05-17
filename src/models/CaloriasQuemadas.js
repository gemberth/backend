const mongoose = require("mongoose");
const { Schema } = mongoose;

const caloriasQuemadasSchema = new Schema({
  id_usuario: { type: String, required: true },
  caloriasQuemadas: { type: Number, default: 0 },
  fecha: { type: String },
//   caloriasConsumidas: { type: Number, required: true },
});

module.exports = mongoose.model("CaloriasQuemadas", caloriasQuemadasSchema);
