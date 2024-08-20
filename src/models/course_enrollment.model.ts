import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config";
import CourseProfessor from "./course_professor.model";
import Student from "./student.model";
import CourseStatus from "./course_status.model";

const CourseEnrollment = sequelize.define("CourseEnrollment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  enrollment_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  deleted_at: {
    type: DataTypes.DATE,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  deleted_by: {
    type: DataTypes.INTEGER,
  },
  created_by: {
    type: DataTypes.INTEGER,
  },
  updated_by: {
    type: DataTypes.INTEGER,
  },
  course_status_id: {
    type: DataTypes.TINYINT,
    references: {
      model: CourseStatus,
      key: "id",
    },
  },
  course_professor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: CourseProfessor,
      key: "id",
    },
    allowNull: false,
  },
  student_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Student,
      key: "id",
    },
    allowNull: false,
  },
});

CourseProfessor.hasMany(CourseEnrollment, {
  foreignKey: "course_professor_id",
});
Student.hasMany(CourseEnrollment, { foreignKey: "student_id" });
CourseStatus.hasMany(CourseEnrollment, { foreignKey: "course_status_id" });

export default CourseEnrollment;
