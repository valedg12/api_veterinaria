import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  especie: {
    type: String,
    required: true,
    trim: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  propietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente", // Relación con cliente
  },
});

const Mascota = mongoose.model("Mascota", mascotaSchema);

export default Mascota;
