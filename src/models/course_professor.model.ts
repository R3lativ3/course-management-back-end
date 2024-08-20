import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.config";
import Course from "./course.model";
import Professor from "./professor.model";

interface CourseProfessorAttributes {
  id: number;
  course_id: number;
  professor_id: number;
  start_date: Date;
  end_date: Date;
  deleted: boolean;
  deleted_at?: Date;
  deleted_by?: number;
  created_by: number;
  updated_at?: Date;
  updated_by?: number;
}

interface CourseProfessorCreationAttributes
  extends Optional<
    CourseProfessorAttributes,
    "id" | "deleted" | "deleted_at" | "deleted_by" | "updated_at" | "updated_by"
  > {}

class CourseProfessor
  extends Model<CourseProfessorAttributes, CourseProfessorCreationAttributes>
  implements CourseProfessorAttributes
{
  public id!: number;
  public course_id!: number;
  public professor_id!: number;
  public start_date!: Date;
  public end_date!: Date;
  public deleted!: boolean;
  public deleted_at?: Date;
  public deleted_by?: number;
  public created_by!: number;
  public updated_at?: Date;
  public updated_by?: number;
}

CourseProfessor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Course,
        key: "id",
      },
    },
    professor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Professor,
        key: "id",
      },
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
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_by: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "course_professor",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

CourseProfessor.belongsTo(Course, { foreignKey: "course_id" });
CourseProfessor.belongsTo(Professor, { foreignKey: "professor_id" });

export default CourseProfessor;
