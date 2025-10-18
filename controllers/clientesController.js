import Cliente from "../models/Cliente.js";

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener clientes" });
  }
};

// Crear un nuevo cliente
const crearCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.json({ message: "Cliente creado correctamente", cliente: nuevoCliente });
  } catch (error) {
    res.status(500).json({ message: "Error al crear cliente" });
  }
};

// Actualizar cliente existente
const actualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json({ message: "Cliente actualizado correctamente", cliente });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar cliente" });
  }
};

// Eliminar cliente
const eliminarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar cliente" });
  }
};

export {
  obtenerClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
};
