import mongoose from "mongoose";

const dbconnect = async () => {
  try {
    // Usamos la variable MONGODB_URI del archivo .env
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ Conectado a MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};

export default dbconnect;
