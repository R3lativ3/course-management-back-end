import Student from "../models/student.model";
import { Model } from "sequelize";

interface StudentCreationAttributes {
  first_name: string;
  last_name: string;
  registration_number: string;
  email: string;
  phone_number?: string;
  deleted: boolean;
}

export const createStudent = async (
  studentData: StudentCreationAttributes
): Promise<Student> => {
  try {
    return await Student.create(studentData);
  } catch (error) {
    throw new Error("Error creating student: " + (error as Error).message);
  }
};

export const getStudents = async (): Promise<Student[]> => {
  try {
    return await Student.findAll({
      where: { deleted: false },
    });
  } catch (error) {
    throw new Error("Error getting students: " + (error as Error).message);
  }
};

export const getStudentById = async (
  studentId: string
): Promise<Student | null> => {
  try {
    const student = await Student.findOne({
      where: {
        id: studentId,
        deleted: false,
      },
    });
    if (!student) throw new Error("Student not found");
    return student;
  } catch (error) {
    throw new Error("Error getting student: " + (error as Error).message);
  }
};

export const updateStudent = async (
  studentId: string,
  studentData: StudentCreationAttributes
): Promise<Student | null> => {
  const student = await Student.findOne({
    where: {
      id: studentId,
      deleted: false,
    },
  });
  if (!student) throw new Error("Student not found");
  try {
    await student.update(studentData);
    return student;
  } catch (error) {
    throw new Error("Error updating student: " + (error as Error).message);
  }
};

export const deleteStudent = async (studentId: string): Promise<void> => {
  const student = await Student.findOne({
    where: {
      id: studentId,
      deleted: false,
    },
  });
  if (!student) throw new Error("Student not found");
  try {
    await student.update({ deleted: true });
  } catch (error) {
    throw new Error("Error deleting student: " + (error as Error).message);
  }
};
