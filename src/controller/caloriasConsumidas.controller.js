/* Importing the necessary models from the "../models" file. However, the code snippet does not show
which models are being imported as the object being destructured is empty. */
const { CaloriasConsumidas } = require("../models");


const crear = async (req, res) => {
    try {
        
        const data = {
            ...req.body
        }
        
        const caloria = await new CaloriasConsumidas(data);
        await caloria.save();

        res.status(200).json({
            msg: 'Creado con exito',
            caloria
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error del servidor',
        });
    }

};

const traerTodos = async (req, res) => {
    try {
        const caloria = await CaloriasConsumidas.find()

        res.status(200).json({
            msg: 'obtenidos con exito',
            caloria
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error del servidor'
        });
    }
}

const editar = async (req, res) => {
    try {
        const id = req.params.id
        const caloria = await CaloriasConsumidas.findByIdAndUpdate(id, {...req,body})
        res.status(200).json({
            msg: 'Actualizado con exito',
            caloria
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error del servidor'
        });
    }
}

const eliminar = async (req, res) => {
    try {
        const id = req.params.id
        await CaloriasConsumidas.findByIdAndDelete(id)
        res.status(200).json({
            msg: 'Eliminado con exito',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error del servidor'
        });
    }
}




const traerPorId = async (req, res) => {
    try {
        const id = req.params.id
        let usuario = await CaloriasConsumidas.findById(id)
        res.status(200).json({
            msg: 'ok',
            usuario
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error del servidor'
        });
    }
}

module.exports = {
    crear,
    traerTodos,
    editar,
    eliminar,   
    traerPorId
}