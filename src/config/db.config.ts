import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import Course from "../models/course.model";
import Professor from "../models/professor.model";
import CourseProfessor from "../models/course_professor.model";
import Student from "../models/student.model";
import CourseStatus from "../models/course_status.model";
import CourseEnrollment from "../models/course_enrollment.model";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST as string,
    dialect: "mysql",
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
};

const syncModels = async () => {
  try {
    await sequelize.sync();
    console.log("Models synchronized with the database");
  } catch (error) {
    console.error("Error synchronizing models:", error);
    throw error;
  }
};

export { sequelize, connectDB, syncModels };