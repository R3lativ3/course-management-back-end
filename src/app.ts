import express from "express";
import courseRoutes from "./routes/course.routes";
import studentRoutes from "./routes/student.routes";
import courseEnrollmentRoutes from "./routes/course_enrollment.routes";
import { connectDB, syncModels } from "./config/db.config";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const app = express();

app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Course-Student Assignment API",
      version: "1.0.0",
      description: "API para gestionar cursos, estudiantes y matriculaciones",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
