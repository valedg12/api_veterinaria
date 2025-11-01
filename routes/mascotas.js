import express from "express";
import {
  obtenerMascotas,
  obtenerMascota,
  crearMascota,
  actualizarMascota,
  eliminarMascota
} from "../controllers/mascotasController.js";

const router = express.Router();

router.get("/", obtenerMascotas);         
router.get("/:id", obtenerMascota);       
router.post("/", crearMascota);            
router.put("/:id", actualizarMascota);    
router.delete("/:id", eliminarMascota);    

export default router;
