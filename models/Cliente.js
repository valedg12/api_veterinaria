import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  telefono: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true }
});

export default mongoose.model("Cliente", clienteSchema);