const { Router } = require("express");
const { caloriasQuemadasController } = require("../controller");
// const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post("/crear", caloriasQuemadasController.crear);
router.get("/", caloriasQuemadasController.traerTodos);
router.put("/:id", caloriasQuemadasController.editar);
router.delete("/:id", caloriasQuemadasController.eliminar);

module.exports = router;
