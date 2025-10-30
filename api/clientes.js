import dbconnect from "../config/db.js";
import Cliente from "../models/Cliente.js";

export default async function handler(req, res) {
  await dbconnect();

  const { method, query, body } = req;

  try {
 
    if (method === "GET") {
      const clientes = await Cliente.find();
      return res.status(200).json(clientes);
    }


    if (method === "POST") {
      const nuevoCliente = new Cliente(body);
      await nuevoCliente.save();
      return res
        .status(201)
        .json({ message: "Cliente creado correctamente", cliente: nuevoCliente });
    }


    if (method === "PUT") {
      const { id } = query;
      const cliente = await Cliente.findByIdAndUpdate(id, body, { new: true });
      if (!cliente)
        return res.status(404).json({ message: "Cliente no encontrado" });
      return res
        .status(200)
        .json({ message: "Cliente actualizado correctamente", cliente });
    }

    if (method === "DELETE") {
      const { id } = query;
      const cliente = await Cliente.findByIdAndDelete(id);
      if (!cliente)
        return res.status(404).json({ message: "Cliente no encontrado" });
      return res.status(200).json({ message: "Cliente eliminado correctamente" });
    }

    return res.status(405).json({ message: "Método no permitido" });
  } catch (error) {
    console.error("❌ Error en /api/clientes:", error);
    return res.status(500).json({ message: "Error del servidor" });
  }
}