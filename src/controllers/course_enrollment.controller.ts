import { Request, Response } from "express";
import * as courseEnrollmentService from "../services/course_enrollment.service";

export const enrollStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const enrollment = await courseEnrollmentService.enrollStudent(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getEnrollments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const enrollments = await courseEnrollmentService.getEnrollments();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteEnrollment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await courseEnrollmentService.deleteEnrollment(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
