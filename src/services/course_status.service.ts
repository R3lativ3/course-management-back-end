import CourseStatus from "../models/course_status.model";
import {
  CourseStatusCreationAttributes,
  CourseStatusUpdateAttributes,
} from "../models/course_status.model";

export const createCourseStatus = async (
  courseStatusData: CourseStatusCreationAttributes
): Promise<CourseStatus> => {
  try {
    const courseStatus = await CourseStatus.create(courseStatusData);
    return courseStatus;
  } catch (error) {
    throw new Error(
      "Error creating course status: " + (error as Error).message
    );
  }
};

export const getCourseStatuses = async (): Promise<CourseStatus[]> => {
  try {
    return await CourseStatus.findAll({
      where: { deleted: false },
    });
  } catch (error) {
    throw new Error(
      "Error getting course statuses: " + (error as Error).message
    );
  }
};

export const getCourseStatusById = async (
  courseStatusId: string
): Promise<CourseStatus | null> => {
  try {
    const courseStatus = await CourseStatus.findOne({
      where: { id: courseStatusId, deleted: false },
    });
    if (!courseStatus) {
      throw new Error("Course status not found or deleted");
    }
    return courseStatus;
  } catch (error) {
    throw new Error("Error getting course status: " + (error as Error).message);
  }
};

export const updateCourseStatus = async (
  courseStatusId: string,
  courseStatusData: CourseStatusUpdateAttributes
): Promise<CourseStatus | null> => {
  try {
    const courseStatus = await CourseStatus.findOne({
      where: { id: courseStatusId, deleted: false },
    });
    if (!courseStatus) {
      throw new Error("Course status not found or deleted");
    }
    await courseStatus.update(courseStatusData);
    return courseStatus;
  } catch (error) {
    throw new Error(
      "Error updating course status: " + (error as Error).message
    );
  }
};

export const deleteCourseStatus = async (
  courseStatusId: string,
  deleted_by: number
): Promise<void> => {
  try {
    const courseStatus = await CourseStatus.findByPk(courseStatusId);
    if (!courseStatus) {
      throw new Error("Course status not found");
    }
    await courseStatus.update({
      deleted: true,
      deleted_at: new Date(),
      deleted_by,
    });
  } catch (error) {
    throw new Error(
      "Error deleting course status: " + (error as Error).message
    );
  }
};
