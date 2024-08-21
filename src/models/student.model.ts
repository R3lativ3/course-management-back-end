import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.config";

interface StudentAttributes {
  id: number;
  first_name: string;
  last_name: string;
  registration_number: string;
  email: string;
  phone_number?: string;
  enrollment_date?: Date;
  deleted: boolean;
  deleted_at?: Date;
  deleted_by?: number;
  created_by?: number;
  updated_by?: number;
}

interface StudentCreationAttributes extends Optional<StudentAttributes, "id"> {}

class Student
  extends Model<StudentAttributes, StudentCreationAttributes>
  implements StudentAttributes
{
  public id!: number;
  public first_name!: string;
  public last_name!: string;
  public registration_number!: string;
  public email!: string;
  public phone_number?: string;
  public enrollment_date!: Date;
  public deleted!: boolean;
  public deleted_at?: Date;
  public deleted_by?: number;
  public created_by?: number;
  public updated_by?: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registration_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    enrollment_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
    tableName: "student",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Student;
