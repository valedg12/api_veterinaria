import mongoose from "mongoose";

const dbconnect = async () => {
  try {
    
    console.log("🔍 ¿MONGODB_URI existe en runtime?", !!process.env.MONGODB_URI);

  
    if (process.env.MONGODB_URI) {
      console.log("🔍 MONGODB_URI comienza con:", process.env.MONGODB_URI.slice(0, 30) + "...[oculto]");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(` MongoDB conectado correctamente: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
};

export default dbconnect;
