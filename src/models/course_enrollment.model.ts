import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.config";
import CourseStatus from "./course_status.model";

interface CourseEnrollmentAttributes {
  id: number;
  course_professor_id: number;
  student_id: number;
  course_status_id?: number;
  enrollment_date?: Date;
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

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
  },
  {
    sequelize,
    tableName: "course_enrollment",
    timestamps: true,
  }
);

CourseEnrollment.belongsTo(CourseStatus, { foreignKey: "course_status_id" });

export default CourseEnrollment;
