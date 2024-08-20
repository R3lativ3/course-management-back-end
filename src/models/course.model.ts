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
}

interface CourseCreationAttributes
  extends Optional<
    CourseAttributes,
    "id" | "description" | "price" | "capacity" | "credits"
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
      type: DataTypes.DECIMAL(10, 2),
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
    credits: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "course",
    timestamps: true,
  }
);

export default Course;
