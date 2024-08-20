import { Request, Response } from "express";
import * as professorService from "../services/professor.service";

export const createProfessor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req.body);
    if (!req.body.name || !req.body.last_name || !req.body.email) {
      res.status(400).json({
        error: 'The fields "name", "last_name" and "email" are required',
      });
      return;
    }
    const professor = await professorService.createProfessor(req.body);
    res.status(201).json(professor);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getProfessors = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const professors = await professorService.getProfessors();
    res.status(200).json(professors);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getProfessorById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const professor = await professorService.getProfessorById(req.params.id);
    if (!professor) {
      res.status(404).json({ message: "Teacher not found" });
      return;
    }
    res.status(200).json(professor);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateProfessor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedProfessor = await professorService.updateProfessor(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedProfessor);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteProfessor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await professorService.deleteProfessor(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
