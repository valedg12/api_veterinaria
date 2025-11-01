import express from "express";
import dotenv from "dotenv";
import dbconnect from "./config/db.js";

import clientesRoutes from "./routes/clientes.js";
import mascotasRoutes from "./routes/mascotas.js";

dotenv.config();
const app = express();

app.use(express.json());


dbconnect();


app.use("/clientes", clientesRoutes);
app.use("/mascotas", mascotasRoutes);

app.get("/", (req, res) => {
  res.send("✅ API Veterinaria funcionando correctamente (modo local)");
});

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor local en puerto ${PORT}`));
}

export default app;
