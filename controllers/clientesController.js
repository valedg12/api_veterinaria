import Cliente from "../models/Cliente.js";

export const obtenerClientes = async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
};

export const obtenerCliente = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
  res.json(cliente);
};

export const crearCliente = async (req, res) => {
  const nuevoCliente = new Cliente(req.body);
  await nuevoCliente.save();
  res.status(201).json({ message: "Cliente creado", cliente: nuevoCliente });
};

export const actualizarCliente = async (req, res) => {
  const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
  res.json({ message: "Cliente actualizado", cliente });
};

export const eliminarCliente = async (req, res) => {
  const cliente = await Cliente.findByIdAndDelete(req.params.id);
  if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
  res.json({ message: "Cliente eliminado" });
};