import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.config";

interface StudentAttributes {
  id: number;
  first_name: string;
  last_name: string;
  registration_number: string;
  email: string;
  deleted: boolean;
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
  public deleted!: boolean;

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
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "student",
    timestamps: true,
  }
);

export default Student;
