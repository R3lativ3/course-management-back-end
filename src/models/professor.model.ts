import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.config";

interface ProfessorAttributes {
  id: number;
  name: string;
  last_name: string;
  email: string;
}

interface ProfessorCreationAttributes
  extends Optional<ProfessorAttributes, "id"> {}

class Professor
  extends Model<ProfessorAttributes, ProfessorCreationAttributes>
  implements ProfessorAttributes
{
  public id!: number;
  public name!: string;
  public last_name!: string;
  public email!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Professor.init(
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
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "professor",
    timestamps: true,
  }
);

export default Professor;
