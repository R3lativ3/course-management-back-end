import express from "express";
import courseRoutes from "./routes/course.routes";
import studentRoutes from "./routes/student.routes";
import courseEnrollmentRoutes from "./routes/course_enrollment.routes";
import professorRoutes from "./routes/professor.routes";
import courseStatusRoutes from "./routes/course_status.routes";
import courseProfessorRoutes from "./routes/course_professor.routes";
import { connectDB, syncModels } from "./config/db.config";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import cors from "cors";

const app = express();

app.use(express.json());

// TODO: add site for frontend when deployed
const whitelist = ["http://localhost:4100", "http://localhost:4200"];
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Course-Student Assignment API",
      version: "1.0.0",
      description: "API to manage courses, students and enrollments",
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
app.use("/professor", professorRoutes);
app.use("/course-status", courseStatusRoutes);
app.use("/course_professor", courseProfessorRoutes);

const startServer = async () => {
  try {
    await connectDB();
    console.log("Database connection established successfully.");

    await syncModels();
    console.log("Models synchronized with the database.");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
