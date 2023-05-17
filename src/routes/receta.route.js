const { Router } = require("express");
const { recetaController } = require("../controller");
// const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post("/crear", recetaController.crear);
router.get("/",  recetaController.traerTodos);
router.get("/:id",  recetaController.traerPorId);
router.put("/:id", recetaController.actualizar);
router.delete("/:id", recetaController.eliminar);
router.delete("/", recetaController.eliminarTodos);



module.exports = router;
