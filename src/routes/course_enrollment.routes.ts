import { Router } from "express";
import {
  enrollStudent,
  getEnrollments,
  deleteEnrollment,
} from "../controllers/course_enrollment.controller";

const router = Router();

/**
 * @swagger
 * tags: 
 *   name: CourseEnrollment
 *   description: API for course registration managements
 */

/**
 * @swagger
 * /course_enrollment:
 *   post:
 *     summary: Enroll a student in a course
 *     tags: [CourseEnrollment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course_professor_id:
 *                 type: integer
 *                 description: Course ID and related teacher
 *               student_id:
 *                 type: integer
 *                 description: Student ID
 *               course_status_id:
 *                 type: integer
 *                 description: Course status (optional)
 *     responses:
 *       200:
 *         description: Student successfully enrolled
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Registration successful"
 */
router.post("/", enrollStudent);

/**
 * @swagger
 * /course_enrollment:
 *   get:
 *     summary: Get all registrations
 *     tags: [CourseEnrollment]
 *     responses:
 *       200:
 *         description: List of all registrations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   course_professor_id:
 *                     type: integer
 *                   student_id:
 *                     type: integer
 *                   course_status_id:
 *                     type: integer
 *                   enrollment_date:
 *                     type: string
 *                     format: date-time
 */
router.get("/", getEnrollments);

/**
 * @swagger
 * /course_enrollment/{id}:
 *   delete:
 *     summary: Delete a registration by ID
 *     tags: [CourseEnrollment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Registration ID
 *     responses:
 *       200:
 *         description: Registration deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Registration removed"
 */
router.delete("/:id", deleteEnrollment);

export default router;