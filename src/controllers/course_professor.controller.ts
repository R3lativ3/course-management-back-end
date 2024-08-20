import { Request, Response } from "express";
import * as courseProfessorService from "../services/course_professor.service";

export const createCourseProfessor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req.body);
    const { course_id, professor_id, start_date, end_date, created_by } =
      req.body;
    if (
      !course_id ||
      !professor_id ||
      !start_date ||
      !end_date ||
      !created_by
    ) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }
    const newCourseProfessor =
      await courseProfessorService.createCourseProfessor({
        course_id,
        professor_id,
        start_date,
        end_date,
        created_by,
      });
    res.status(201).json(newCourseProfessor);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getCourseProfessors = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const courseProfessors = await courseProfessorService.getCourseProfessors();
    res.status(200).json(courseProfessors);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getCourseProfessorById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const courseProfessor = await courseProfessorService.getCourseProfessorById(
      Number(req.params.id)
    );
    if (!courseProfessor) {
      res
        .status(404)
        .json({ message: "Course-teacher relationship not found" });
      return;
    }
    res.status(200).json(courseProfessor);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateCourseProfessor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { start_date, end_date, updated_by } = req.body;
    if (!updated_by) {
      res.status(400).json({ error: 'The "updated_by" field is required' });
      return;
    }
    const updatedCourseProfessor =
      await courseProfessorService.updateCourseProfessor(
        Number(req.params.id),
        {
          start_date,
          end_date,
          updated_by,
        }
      );
    if (!updatedCourseProfessor) {
      res
        .status(404)
        .json({ message: "Course-teacher relationship not found" });
      return;
    }
    res.status(200).json(updatedCourseProfessor);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteCourseProfessor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { deleted_by } = req.body;
    if (!deleted_by) {
      res.status(400).json({ error: 'The "deleted_by" field is required' });
      return;
    }
    await courseProfessorService.deleteCourseProfessor(
      Number(req.params.id),
      deleted_by
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
