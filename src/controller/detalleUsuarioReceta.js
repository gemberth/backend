const { DetalleUsuarioReceta } = require("../models");


const traerTodos = async (req, res) => {
  try {
    const detalleUsuarioReceta = await DetalleUsuarioReceta.find();

    res.status(200).json({
      msg: "obtenidos con exito",
      detalleUsuarioReceta,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};

const crear = async (req, res) => {
  try {
    const data = {
      ...req.body
    };    
    data.edad = Date.now() ;
    const detalle = await new DetalleUsuarioReceta(data);
    await detalle.save();

    res.status(200).json({
      ok: true,
      msg: "Creado con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};

const traerTodosPorIdUsuario = async (req, res) => {
  try {
    let idUsuario = req.params.idUsuario
    let detalle = await DetalleUsuarioReceta.find().populate({
      path: 'idUsuario',
      select:
        'nombre edad email pesoInicial'
    }).populate({
      path: 'idReceta',
      select:
        'descripcion caloria'
    });
    console.log(detalle)
    res.status(200).json({
      msg: "obtenidos con exito",
      detalle    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};

const eliminar = async (req, res) => {
  try {
    const id = req.params.id;
    await DetalleUsuarioReceta.findByIdAndDelete(id);
    res.status(200).json({
      msg: "Eliminado con exito",

    });
  } catch (error) {
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};



module.exports = {
  crear,
  traerTodosPorIdUsuario,
  eliminar,
  traerTodos
};

