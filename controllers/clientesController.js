import Cliente from "../models/Cliente.js";

export const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener clientes" });
  }
};

export const obtenerCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener cliente" });
  }
};

export const crearCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(201).json({ message: "Cliente creado correctamente", cliente: nuevoCliente });
  } catch (error) {
    res.status(500).json({ message: "Error al crear cliente" });
  }
};

export const actualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json({ message: "Cliente actualizado", cliente });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar cliente" });
  }
};

export const eliminarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar cliente" });
  }
};
