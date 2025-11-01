import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  especie: { type: String, required: true },
  raza: { type: String },
  edad: { type: Number },
  cliente_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true
  }
});

export default mongoose.model("Mascota", mascotaSchema);