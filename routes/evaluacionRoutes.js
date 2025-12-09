import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import {
  obtenerEvaluaciones,
  crearEvaluacion,
  actualizarEvaluacion,
  eliminarEvaluacion,
} from "../controllers/evaluacionController.js";

const router = express.Router();
router.put(
  "/:codigo",
  authMiddleware,
  roleMiddleware("admin", "coordinador"),
  actualizarEvaluacion
);

router.delete(
  "/:codigo",
  authMiddleware,
  roleMiddleware("admin", "coordinador"),
  eliminarEvaluacion
);
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin", "coordinador", "profesor"),
  obtenerEvaluaciones
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin", "coordinador"),
  crearEvaluacion
);



export default router;
