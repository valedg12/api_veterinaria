import Mascota from "../models/Mascota.js";

export const crearMascota = async (req, res) => {
  const nuevaMascota = new Mascota(req.body);
  await nuevaMascota.save();
  res.status(201).json({ message: "Mascota creada", mascota: nuevaMascota });
};

export const obtenerMascotas = async (req, res) => {
  const { cliente_id } = req.query;
  const filtro = cliente_id ? { cliente_id } : {};
  const mascotas = await Mascota.find(filtro).populate("cliente_id", "nombre email");
  res.json(mascotas);
};