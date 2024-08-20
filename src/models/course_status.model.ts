import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.config";

export interface CourseStatusAttributes {
  id: number;
  status: string;
  deleted: boolean;
  deleted_at?: Date | null;
  created_at: Date;
  updated_at: Date;
  deleted_by?: number | null;
  created_by: number;
  updated_by?: number | null;
}

export interface CourseStatusCreationAttributes
  extends Optional<
    CourseStatusAttributes,
    "id" | "deleted" | "deleted_at" | "updated_at" | "updated_by" | "deleted_by"
  > {}

export interface CourseStatusUpdateAttributes {
  status?: string;
  updated_by: number;
}

class CourseStatus
  extends Model<CourseStatusAttributes, CourseStatusCreationAttributes>
  implements CourseStatusAttributes
{
  public id!: number;
  public status!: string;
  public deleted!: boolean;
  public deleted_at!: Date | null;
  public created_at!: Date;
  public updated_at!: Date;
  public deleted_by!: number | null;
  public created_by!: number;
  public updated_by!: number | null;
}

CourseStatus.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "course_status",
    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default CourseStatus;
