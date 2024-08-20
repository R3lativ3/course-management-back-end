import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config";

const CourseStatus = sequelize.define("CourseStatus", {
  id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: true,
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
});

export default CourseStatus;
