const { Receta } = require("../models");
// const bcrypt = require("bcryptjs");
// const { generarJWT } = require("../helpers/generar-jwt");

const crear = async (req, res) => {
  try {
    console.log(req.body);
    const data = {
      ...req.body,
    };


    const receta = await new Receta(data);
    await receta.save();

    res.status(200).json({
      msg: "Creado con exito",
      receta,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};

const traerTodos = async (req, res) => {
  try {
    const recetas = await Receta.find();

    res.status(200).json({
      msg: "obtenidos con exito",
      recetas,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};

const actualizar = async (req, res) => {
  try {
    const id = req.params.id;
    const receta = await Receta.findByIdAndUpdate(id, { ...req.body });
    res.status(200).json({
      msg: "Actualizado con exito",
      receta,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};

const eliminar = async (req, res) => {
  try {
    const id = req.params.id;
    await Receta.findByIdAndDelete(id);
    res.status(200).json({
      msg: "Eliminado con exito",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};
const eliminarTodos = async (req, res) => {
  try {
    await Receta.deleteMany();
    res.status(200).json({
      msg: "Eliminado con exito",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};
const traerPorId = async (req, res) => {
  try {
      const id = req.params.id
      let receta = await Receta.findById(id)
      res.status(200).json({
          msg: 'ok',
          receta
      });
  } catch (error) {
      res.status(500).json({
          msg: 'Error del servidor'
      });
  }
};






module.exports = {
  crear,
  traerTodos,
  actualizar,
  eliminar,
  traerPorId,
  eliminarTodos
};
