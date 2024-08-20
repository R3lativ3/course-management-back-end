import { Request, Response } from "express";
import * as courseStatusService from "../services/course_status.service";
import { CourseStatusUpdateAttributes } from "../models/course_status.model";

export const createCourseStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { status, created_by } = req.body;
    if (!status || !created_by) {
      res
        .status(400)
        .json({ error: 'The "status" and "created_by" fields are required' });
      return;
    }
    const newCourseStatus = await courseStatusService.createCourseStatus({
      status,
      created_by,
      created_at: new Date(),
    });
    res.status(201).json(newCourseStatus);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getCourseStatuses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const courseStatuses = await courseStatusService.getCourseStatuses();
    res.status(200).json(courseStatuses);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getCourseStatusById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const courseStatus = await courseStatusService.getCourseStatusById(
      req.params.id
    );
    if (!courseStatus) {
      res.status(404).json({ message: "Course status not found or deleted" });
      return;
    }
    res.status(200).json(courseStatus);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateCourseStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { status, updated_by } = req.body;
    if (!updated_by) {
      res.status(400).json({ error: 'The "updated_by" field is required' });
      return;
    }
    const updatedCourseStatus = await courseStatusService.updateCourseStatus(
      req.params.id,
      { status, updated_by } as CourseStatusUpdateAttributes
    );
    if (!updatedCourseStatus) {
      res.status(404).json({ message: "Course status not found or deleted" });
      return;
    }
    res.status(200).json(updatedCourseStatus);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteCourseStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { deleted_by } = req.body;
    if (!deleted_by) {
      res.status(400).json({ error: 'The "deleted_by" field is required' });
      return;
    }
    await courseStatusService.deleteCourseStatus(req.params.id, deleted_by);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
