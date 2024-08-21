import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.config";
import CourseStatus from "./course_status.model";

interface CourseEnrollmentAttributes {
  id: number;
  course_professor_id: number;
  student_id: number;
  course_status_id?: number;
  enrollment_date?: Date;
  deleted: boolean;
  deleted_at?: Date;
  deleted_by?: number;
  created_by?: number;
  created_at?: Date;
  updated_at?: Date;
  updated_by?: number;
}

interface CourseEnrollmentCreationAttributes
  extends Optional<CourseEnrollmentAttributes, "id" | "enrollment_date"> {}

class CourseEnrollment
  extends Model<CourseEnrollmentAttributes, CourseEnrollmentCreationAttributes>
  implements CourseEnrollmentAttributes
{
  public id!: number;
  public course_professor_id!: number;
  public student_id!: number;
  public course_status_id?: number;
  public enrollment_date!: Date;
  public deleted!: boolean;
  public deleted_at?: Date;
  public deleted_by?: number;
  public created_by?: number;
  public updated_by?: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

CourseEnrollment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_professor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    course_status_id: {
      type: DataTypes.INTEGER,
      references: {
        model: CourseStatus,
        key: "id",
      },
    },
    enrollment_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "course_enrollment",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

CourseEnrollment.belongsTo(CourseStatus, { foreignKey: "course_status_id" });

export default CourseEnrollment;
