
import dbconnect from "../config/db.js";
import Mascota from "../models/Mascota.js";

export default async function handler(req, res) {
  await dbconnect();

  const { method, query, body } = req;

  try {

    if (method === "GET") {
      const mascotas = await Mascota.find().populate("propietario", "nombre email");
      return res.status(200).json(mascotas);
    }

  
    if (method === "POST") {
      const nuevaMascota = new Mascota(body);
      await nuevaMascota.save();
      return res
        .status(201)
        .json({ message: "Mascota creada correctamente", mascota: nuevaMascota });
    }

    if (method === "PUT") {
      const { id } = query;
      const mascota = await Mascota.findByIdAndUpdate(id, body, { new: true });
      if (!mascota)
        return res.status(404).json({ message: "Mascota no encontrada" });
      return res
        .status(200)
        .json({ message: "Mascota actualizada correctamente", mascota });
    }

 
    if (method === "DELETE") {
      const { id } = query;
      const mascota = await Mascota.findByIdAndDelete(id);
      if (!mascota)
        return res.status(404).json({ message: "Mascota no encontrada" });
      return res.status(200).json({ message: "Mascota eliminada correctamente" });
    }

    return res.status(405).json({ message: "Método no permitido" });
  } catch (error) {
    console.error("Error en /api/mascotas:", error);
    return res.status(500).json({ message: "Error del servidor" });
  }
}