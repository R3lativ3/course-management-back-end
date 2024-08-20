import Course from "../models/course.model";
import { Model } from "sequelize";

interface CourseCreationAttributes {
  name: string;
  description?: string;
  price?: number;
  capacity?: number;
  credits?: number;
}

export const createCourse = async (
  courseData: CourseCreationAttributes
): Promise<Course> => {
  try {
    return await Course.create(courseData);
  } catch (error) {
    throw new Error("Error al crear el curso: " + (error as Error).message);
  }
};

export const getCourses = async (): Promise<Course[]> => {
  try {
    return await Course.findAll();
  } catch (error) {
    throw new Error("Error al obtener los cursos: " + (error as Error).message);
  }
};

export const getCourseById = async (
  courseId: string
): Promise<Course | null> => {
  try {
    return await Course.findByPk(courseId);
  } catch (error) {
    throw new Error("Error al obtener el curso: " + (error as Error).message);
  }
};

export const updateCourse = async (
  courseId: string,
  courseData: CourseCreationAttributes
): Promise<Course | null> => {
  const course = await Course.findByPk(courseId);
  if (!course) throw new Error("Curso no encontrado");
  try {
    await course.update(courseData);
    return course;
  } catch (error) {
    throw new Error(
      "Error al actualizar el curso: " + (error as Error).message
    );
  }
};

export const deleteCourse = async (courseId: string): Promise<void> => {
  const course = await Course.findByPk(courseId);
  if (!course) throw new Error("Curso no encontrado");
  try {
    await course.destroy();
  } catch (error) {
    throw new Error("Error al eliminar el curso: " + (error as Error).message);
  }
};
