import express from "express";
import {
  obtenerMascotas,
  crearMascota,
  actualizarMascota,
  eliminarMascota,
} from "../controllers/mascotasController.js";

const router = express.Router();

router.get("/", obtenerMascotas);
router.post("/", crearMascota);
router.put("/:id", actualizarMascota);
router.delete("/:id", eliminarMascota);

export default router;
