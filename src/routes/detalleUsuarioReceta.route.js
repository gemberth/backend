const { Router } = require('express');
const { detalleUsuarioRecetaController } = require('../controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
router.get('/', detalleUsuarioRecetaController.traerTodos); 
router.post('/crear', detalleUsuarioRecetaController.crear); 
router.get('/:idUsuario', detalleUsuarioRecetaController.traerTodosPorIdUsuario);    
router.delete('/:id', detalleUsuarioRecetaController.eliminar);


module.exports = router; 