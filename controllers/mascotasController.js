import Mascota from "../models/Mascota.js";

// Obtener todas las mascotas
const obtenerMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.find().populate("propietario", "nombre email");
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener mascotas" });
  }
};

// Crear nueva mascota
const crearMascota = async (req, res) => {
  try {
    const nuevaMascota = new Mascota(req.body);
    await nuevaMascota.save();
    res.json({ message: "Mascota creada correctamente", mascota: nuevaMascota });
  } catch (error) {
    res.status(500).json({ message: "Error al crear mascota" });
  }
};

// Actualizar mascota existente
const actualizarMascota = async (req, res) => {
  try {
    const mascota = await Mascota.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mascota) return res.status(404).json({ message: "Mascota no encontrada" });
    res.json({ message: "Mascota actualizada correctamente", mascota });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar mascota" });
  }
};

// Eliminar mascota
const eliminarMascota = async (req, res) => {
  try {
    const mascota = await Mascota.findByIdAndDelete(req.params.id);
    if (!mascota) return res.status(404).json({ message: "Mascota no encontrada" });
    res.json({ message: "Mascota eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar mascota" });
  }
};

export {
  obtenerMascotas,
  crearMascota,
  actualizarMascota,
  eliminarMascota,
};
