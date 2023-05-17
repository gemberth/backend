const { Rutina } = require("../models");

const crear = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };
    const rutina = await new Rutina(data);
    await rutina.save();

    res.status(200).json({
      msg: "Rutina creada con éxito",
      rutina,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};

const obtenerTodas = async (req, res) => {
  try {
    const rutinas = await Rutina.find(); // Obtener todas las rutinas del usuario autenticado

    res.status(200).json({
      msg: "Rutinas obtenidas con éxito",
      rutinas,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};

const obtenerPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const rutina = await Rutina.findOne({ _id: id, idUsuario: req.user.id }); // Obtener una rutina específica del usuario autenticado

    if (!rutina) {
      return res.status(404).json({
        msg: "Rutina no encontrada",
      });
    }

    res.status(200).json({
      msg: "Rutina obtenida con éxito",
      rutina,
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
    const rutina = await Rutina.findOneAndUpdate(id, { ...req.body });
    res.status(200).json({
      msg: "Actualizado con exito",
      rutina,
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
    await Rutina.findOneAndDelete(id);
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
  obtenerTodas,
  obtenerPorId,
  actualizar,
  eliminar,
};
