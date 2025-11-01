import express from "express";
import { crearMascota, obtenerMascotas } from "../controllers/mascotasController.js";

const router = express.Router();

router.get("/", obtenerMascotas);
router.post("/", crearMascota);

export default router;
