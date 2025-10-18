import express from "express";
import dotenv from "dotenv";
import dbconnect from "./config/db.js";
import clientesRoutes from "./routes/clientes.js";
import mascotasRoutes from "./routes/mascotas.js";

dotenv.config();
const app = express();

// Permite recibir JSON
app.use(express.json());

// Conectar base de datos
dbconnect();

// Rutas
app.use("/api/clientes", clientesRoutes);
app.use("/api/mascotas", mascotasRoutes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
