import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config";
import Course from "./course.model";
import Professor from "./professor.model";

const CourseProfessor = sequelize.define("CourseProfessor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  deleted_at: {
    type: DataTypes.DATE,
  },
  deleted_by: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  created_by: {
    type: DataTypes.INTEGER,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_by: {
    type: DataTypes.INTEGER,
  },
  course_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Course,
      key: "id",
    },
  },
  professor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Professor,
      key: "id",
    },
  },
});

Course.belongsToMany(Professor, {
  through: CourseProfessor,
  foreignKey: "course_id",
});
Professor.belongsToMany(Course, {
  through: CourseProfessor,
  foreignKey: "professor_id",
});

export default CourseProfessor;
