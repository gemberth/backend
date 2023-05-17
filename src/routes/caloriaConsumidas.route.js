const { Router } = require("express");
const { caloriasConsumidasController } = require("../controller");
// const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post("/crear", caloriasConsumidasController.crear);
router.get("/", caloriasConsumidasController.traerTodos);
router.put("/:id", caloriasConsumidasController.editar);
router.delete("/:id", caloriasConsumidasController.eliminar);

module.exports = router;
