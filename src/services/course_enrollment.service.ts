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
    throw new Error(
      "Error al inscribir al estudiante: " + (error as Error).message
    );
  }
};

export const getEnrollments = async (): Promise<CourseEnrollment[]> => {
  try {
    return await CourseEnrollment.findAll();
  } catch (error) {
    throw new Error(
      "Error al obtener las inscripciones: " + (error as Error).message
    );
  }
};

export const deleteEnrollment = async (enrollmentId: string): Promise<void> => {
  const enrollment = await CourseEnrollment.findByPk(enrollmentId);
  if (!enrollment) throw new Error("Inscripción no encontrada");
  try {
    await enrollment.destroy();
  } catch (error) {
    throw new Error(
      "Error al eliminar la inscripción: " + (error as Error).message
    );
  }
};
