const mongoose = require("mongoose");
const { Schema } = mongoose;

const caloriasConsumidaSchema = new Schema({
  id_usuario: {type: Schema.Types.ObjectId },
  caloriasConsumidas: {type:Number },
  fecha: { type: Date },
//   fecha: { type: , default: 0 },
  // caloriasQuemadas: { type: Number, default: 0 }
});

module.exports = mongoose.model("CaloriasConsumidas", caloriasConsumidaSchema);
