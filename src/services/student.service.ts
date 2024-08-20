import Student from "../models/student.model";
import { Model } from "sequelize";

interface StudentCreationAttributes {
  first_name: string;
  last_name: string;
  registration_number: string;
  email: string;
}

export const createStudent = async (
  studentData: StudentCreationAttributes
): Promise<Student> => {
  try {
    return await Student.create(studentData);
  } catch (error) {
    throw new Error(
      "Error al crear el estudiante: " + (error as Error).message
    );
  }
};

export const getStudents = async (): Promise<Student[]> => {
  try {
    return await Student.findAll();
  } catch (error) {
    throw new Error(
      "Error al obtener los estudiantes: " + (error as Error).message
    );
  }
};

export const updateStudent = async (
  studentId: string,
  studentData: StudentCreationAttributes
): Promise<Student | null> => {
  const student = await Student.findByPk(studentId);
  if (!student) throw new Error("Estudiante no encontrado");
  try {
    await student.update(studentData);
    return student;
  } catch (error) {
    throw new Error(
      "Error al actualizar el estudiante: " + (error as Error).message
    );
  }
};

export const deleteStudent = async (studentId: string): Promise<void> => {
  const student = await Student.findByPk(studentId);
  if (!student) throw new Error("Estudiante no encontrado");
  try {
    await student.destroy();
  } catch (error) {
    throw new Error(
      "Error al eliminar el estudiante: " + (error as Error).message
    );
  }
};
