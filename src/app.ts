import express from "express";
import courseRoutes from "./routes/course.routes";
import studentRoutes from "./routes/student.routes";
import courseEnrollmentRoutes from "./routes/course_enrollment.routes";
import { connectDB, syncModels } from "./config/db.config";

const app = express();

app.use(express.json());

app.use("/course", courseRoutes);
app.use("/student", studentRoutes);
app.use("/course_enrollment", courseEnrollmentRoutes);

const startServer = async () => {
  try {
    await connectDB();
    console.log("Conexión a la base de datos establecida correctamente.");

    await syncModels();
    console.log("Modelos sincronizados con la base de datos.");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
};

startServer();
