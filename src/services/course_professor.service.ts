import CourseProfessor from "../models/course_professor.model";
import Course from "../models/course.model";
import Professor from "../models/professor.model";

export const createCourseProfessor = async (data: {
  course_id: number;
  professor_id: number;
  start_date: Date;
  end_date: Date;
  created_by: number;
}): Promise<CourseProfessor> => {
  try {
    const courseProfessor = await CourseProfessor.create({
      course_id: data.course_id,
      professor_id: data.professor_id,
      start_date: data.start_date,
      end_date: data.end_date,
      created_by: data.created_by,
    });
    return courseProfessor;
  } catch (error) {
    throw new Error(
      "Error creating relationship between course and teacher: " +
        (error as Error).message
    );
  }
};

export const getCourseProfessors = async (): Promise<CourseProfessor[]> => {
  try {
    return await CourseProfessor.findAll({
      where: { deleted: false },
      include: [Course, Professor],
    });
  } catch (error) {
    throw new Error(
      "Error getting course-teacher relations: " + (error as Error).message
    );
  }
};

export const getCourseProfessorById = async (
  id: number
): Promise<CourseProfessor | null> => {
  try {
    const courseProfessor = await CourseProfessor.findOne({
      where: { id, deleted: false },
      include: [Course, Professor],
    });
    if (!courseProfessor) {
      throw new Error("Course-teacher relationship not found or deleted");
    }
    return courseProfessor;
  } catch (error) {
    throw new Error(
      "Error getting course-teacher relationship: " + (error as Error).message
    );
  }
};

export const updateCourseProfessor = async (
  id: number,
  data: {
    start_date?: Date;
    end_date?: Date;
    updated_by: number;
  }
): Promise<CourseProfessor | null> => {
  try {
    const courseProfessor = await CourseProfessor.findOne({
      where: { id, deleted: false },
    });
    if (!courseProfessor) {
      throw new Error("Course-teacher relationship not found or deleted");
    }
    await courseProfessor.update({
      start_date: data.start_date || courseProfessor.start_date,
      end_date: data.end_date || courseProfessor.end_date,
      updated_by: data.updated_by,
    });
    return courseProfessor;
  } catch (error) {
    throw new Error(
      "Error updating course-teacher relationship: " + (error as Error).message
    );
  }
};

export const deleteCourseProfessor = async (
  id: number,
  deleted_by: number
): Promise<void> => {
  try {
    const courseProfessor = await CourseProfessor.findOne({
      where: { id },
    });
    if (!courseProfessor) {
      throw new Error("Course-teacher relationship not found");
    }
    await courseProfessor.update({
      deleted: true,
      deleted_at: new Date(),
      deleted_by,
    });
  } catch (error) {
    throw new Error(
      "Error deleting course-teacher relationship: " + (error as Error).message
    );
  }
};
