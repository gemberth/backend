const { Schema, model } = require('mongoose');

const rutinaSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  tiempoDeRutina: { type: Number, required: true },
  caloriasEstimadas: { type: Number, required: true },
  idUsuario: { type: Number, required: true },
  rutinaCompletada: { type: String, default: false },
  caloriasPerdidas: { type: Number, default: 0 }
});

module.exports = model("Rutina", rutinaSchema);
