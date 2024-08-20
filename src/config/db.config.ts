import { Sequelize } from "sequelize";
import Course from "../models/course.model";
import Professor from "../models/professor.model";
import CourseProfessor from "../models/course_professor.model";
import Student from "../models/student.model";
import CourseStatus from "../models/course_status.model";
import CourseEnrollment from "../models/course_enrollment.model";

export const sequelize = new Sequelize(
  "bckkrpfallvmg57mgkcl",
  "us1xk7qrrqeptl3g",
  "ihsBxqoR9wgCX3LPzBdn",
  {
    host: "bckkrpfallvmg57mgkcl-mysql.services.clever-cloud.com",
    dialect: "mysql",
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados con la base de datos");
  } catch (error) {
    console.error("Error al sincronizar los modelos:", error);
  }
};

export { syncModels };
