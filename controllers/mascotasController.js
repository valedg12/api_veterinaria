import Mascota from "../models/Mascota.js";


export const obtenerMascotas = async (req, res) => {
  try {
    const { cliente_id } = req.query;

    const filtro = cliente_id ? { cliente_id } : {};
    const mascotas = await Mascota.find(filtro).populate("cliente_id", "nombre email");

    res.status(200).json(mascotas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener mascotas" });
  }
};


export const obtenerMascota = async (req, res) => {
  try {
    const mascota = await Mascota.findById(req.params.id).populate("cliente_id", "nombre email");
    if (!mascota) return res.status(404).json({ message: "Mascota no encontrada" });

    res.status(200).json(mascota);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la mascota" });
  }
};


export const crearMascota = async (req, res) => {
  try {
    const nuevaMascota = new Mascota(req.body);
    await nuevaMascota.save();
    res.status(201).json({ message: "Mascota creada con éxito", mascota: nuevaMascota });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la mascota" });
  }
};


export const actualizarMascota = async (req, res) => {
  try {
    const mascota = await Mascota.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mascota) return res.status(404).json({ message: "Mascota no encontrada" });

    res.status(200).json({ message: "Mascota actualizada", mascota });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la mascota" });
  }
};


export const eliminarMascota = async (req, res) => {
  try {
    const mascota = await Mascota.findByIdAndDelete(req.params.id);
    if (!mascota) return res.status(404).json({ message: "Mascota no encontrada" });

    res.status(200).json({ message: "Mascota eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la mascota" });
  }
};
