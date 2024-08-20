import { Request, Response } from "express";
import * as courseService from "../services/course.service";

export const createCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req.body);
    if (!req.body.name) {
      res.status(400).json({ error: 'El campo "name" es obligatorio' });
      return;
    }
    const course = await courseService.createCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const courses = await courseService.getCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getCourseById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const course = await courseService.getCourseById(req.params.id);
    if (!course) {
      res.status(404).json({ message: "Curso no encontrado" });
      return;
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedCourse = await courseService.updateCourse(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await courseService.deleteCourse(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
