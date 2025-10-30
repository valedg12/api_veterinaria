import express from "express";
import dotenv from "dotenv";
import dbconnect from "./config/db.js";
import clientesRoutes from "./api/clientes.js";
import mascotasRoutes from "./api/mascotas.js";

dotenv.config();
const app = express();

app.use(express.json());

dbconnect();


app.use("/api/clientes", clientesRoutes);
app.use("/api/mascotas", mascotasRoutes);


app.get("/", (req, res) => {
  res.send("API Veterinaria funcionando correctamente ");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

export default app;
