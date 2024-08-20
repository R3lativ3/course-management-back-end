import CourseEnrollment from "../models/course_enrollment.model";

interface EnrollmentData {
  course_professor_id: number;
  student_id: number;
  course_status_id?: number;
}

export const enrollStudent = async (
  enrollmentData: EnrollmentData
): Promise<CourseEnrollment> => {
  try {
    return await CourseEnrollment.create(enrollmentData);
  } catch (error) {
    throw new Error("Error registering student: " + (error as Error).message);
  }
};

export const getEnrollments = async (): Promise<CourseEnrollment[]> => {
  try {
    return await CourseEnrollment.findAll();
  } catch (error) {
    throw new Error("Error getting registrations: " + (error as Error).message);
  }
};

export const deleteEnrollment = async (enrollmentId: string): Promise<void> => {
  const enrollment = await CourseEnrollment.findByPk(enrollmentId);
  if (!enrollment) throw new Error("Registration not found");
  try {
    await enrollment.destroy();
  } catch (error) {
    throw new Error("Error deleting registration: " + (error as Error).message);
  }
};
