const { Router } = require("express");
const { rutinaController } = require("../controller");
// const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post("/crear", rutinaController.crear);
router.get("/", rutinaController.obtenerTodas);
router.put("/:id", rutinaController.actualizar);
router.delete("/:id", rutinaController.eliminar);

module.exports = router;
