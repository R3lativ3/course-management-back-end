import { Router } from "express";
import {
  createCourseProfessor,
  getCourseProfessors,
  getCourseProfessorById,
  updateCourseProfessor,
  deleteCourseProfessor,
} from "../controllers/course_professor.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: CourseProfessor
 *   description: API to manage relationships between courses and teachers
 */

/**
 * @swagger
 * /course_professor:
 *   get:
 *     summary: Get all course-teacher relationships
 *     tags: [CourseProfessor]
 *     responses:
 *       200:
 *         description: List of course-teacher relationships
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   course_id:
 *                     type: integer
 *                   professor_id:
 *                     type: integer
 *                   start_date:
 *                     type: string
 *                     format: date
 *                   end_date:
 *                     type: string
 *                     format: date
 */
router.get("/", getCourseProfessors);

/**
 * @swagger
 * /course_professor:
 *   post:
 *     summary: Create a new relationship between course and teacher
 *     tags: [CourseProfessor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course_id:
 *                 type: integer
 *               professor_id:
 *                 type: integer
 *               start_date:
 *                 type: string
 *                 format: date
 *               end_date:
 *                 type: string
 *                 format: date
 *               created_by:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Course-teacher relationship successfully created
 */
router.post("/", createCourseProfessor);

/**
 * @swagger
 * /course_professor/{id}:
 *   get:
 *     summary: Gets a course-teacher relationship by ID
 *     tags: [CourseProfessor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Course-teacher relationship ID
 *     responses:
 *       200:
 *         description: Course-teacher relationship successfully obtained
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 course_id:
 *                   type: integer
 *                 professor_id:
 *                   type: integer
 *                 start_date:
 *                   type: string
 *                   format: date
 *                 end_date:
 *                   type: string
 *                   format: date
 */
router.get("/:id", getCourseProfessorById);

/**
 * @swagger
 * /course_professor/{id}:
 *   put:
 *     summary: Update a course-teacher relationship by ID
 *     tags: [CourseProfessor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Course-teacher relationship ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               start_date:
 *                 type: string
 *                 format: date
 *               end_date:
 *                 type: string
 *                 format: date
 *               updated_by:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Course-teacher relationship successfully updated
 */
router.put("/:id", updateCourseProfessor);

/**
 * @swagger
 * /course_professor/{id}:
 *   delete:
 *     summary: Delete a course-teacher relationship (soft delete)
 *     tags: [CourseProfessor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Course-teacher relationship ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deleted_by:
 *                 type: integer
 *     responses:
 *       204:
 *         description: Course-teacher relationship successfully deleted
 */
router.delete("/:id", deleteCourseProfessor);

export default router;
