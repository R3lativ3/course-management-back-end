import { Request, Response } from "express";
import * as studentService from "../services/student.service";

export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getStudents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const students = await studentService.getStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedStudent = await studentService.updateStudent(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await studentService.deleteStudent(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
