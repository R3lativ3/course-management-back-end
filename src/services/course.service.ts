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
    throw new Error("Error creating course: " + (error as Error).message);
  }
};

export const getCourses = async (): Promise<Course[]> => {
  try {
    return await Course.findAll({
      where: {
        deleted: false,
      },
    });
  } catch (error) {
    throw new Error("Error getting courses: " + (error as Error).message);
  }
};

export const getCourseById = async (
  courseId: string
): Promise<Course | null> => {
  try {
    const course = await Course.findOne({
      where: {
        id: courseId,
        deleted: false,
      },
    });
    if (!course) {
      throw new Error("Course not found or deleted");
    }
    return course;
  } catch (error) {
    throw new Error("Error getting course: " + (error as Error).message);
  }
};

export const updateCourse = async (
  courseId: string,
  courseData: CourseCreationAttributes
): Promise<Course | null> => {
  const course = await Course.findOne({
    where: {
      id: courseId,
      deleted: false,
    },
  });
  if (!course) throw new Error("Course not found or deleted");
  try {
    await course.update(courseData);
    return course;
  } catch (error) {
    throw new Error("Error updating course: " + (error as Error).message);
  }
};

export const deleteCourse = async (courseId: string): Promise<void> => {
  const course = await Course.findByPk(courseId);
  if (!course) throw new Error("Course not found");
  try {
    course.deleted = true;
    await course.save();
  } catch (error) {
    throw new Error("Error deleting course: " + (error as Error).message);
  }
};
