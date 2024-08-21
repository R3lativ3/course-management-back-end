import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.config";
import Professor from "./professor.model";

interface CourseAttributes {
  id: number;
  name: string;
  description?: string;
  price?: number;
  capacity?: number;
  credits?: number;
  deleted: boolean;
  deleted_at?: Date;
  deleted_by?: number;
  created_by?: number;
  updated_by?: number;
}

interface CourseCreationAttributes
  extends Optional<
    CourseAttributes,
    "id" | "description" | "price" | "capacity" | "credits" | "deleted"
  > {}

class Course
  extends Model<CourseAttributes, CourseCreationAttributes>
  implements CourseAttributes
{
  public id!: number;
  public name!: string;
  public description?: string;
  public price?: number;
  public capacity?: number;
  public credits?: number;
  public deleted!: boolean;
  public deleted_at?: Date;
  public deleted_by?: number;
  public created_by?: number;
  public updated_by?: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(7, 2),
    },
    capacity: {
      type: DataTypes.TINYINT,
    },
    credits: {
      type: DataTypes.INTEGER,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "course",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Course;
