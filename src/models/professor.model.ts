import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.config";

interface ProfessorAttributes {
  id: number;
  name: string;
  last_name: string;
  email: string;
  deleted: boolean;
  deleted_at?: Date;
  deleted_by?: number;
  created_by?: number;
  updated_by?: number;
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
  public deleted!: boolean;
  public deleted_at?: Date;
  public deleted_by?: number;
  public created_by?: number;
  public updated_by?: number;

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
    tableName: "professor",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Professor;
