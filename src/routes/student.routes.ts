import { Router } from "express";
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Student
 *   description: API for student management
 */

/**
 * @swagger
 * /student:
 *   get:
 *     summary: Get the list of all students
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: List of students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   first_name:
 *                     type: string
 *                   last_name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone_number:
 *                     type: string
 */
router.get("/", getStudents);

/**
 * @swagger
 * /student:
 *   post:
 *     summary: Create a new student
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               registration_number:
 *                 type: string
 *               phone_number:
 *                 type: string
 *     responses:
 *       201:
 *         description: Student created successfully
 */
router.post("/", createStudent);

/**
 * @swagger
 * /student/{id}:
 *   put:
 *     summary: Update an existing student
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone_number:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student successfully updated
 */
router.put("/:id", updateStudent);

/**
 * @swagger
 * /student/{id}:
 *   delete:
 *     summary: Delete a student
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Student ID
 *     responses:
 *       204:
 *         description: Student successfully deleted
 */
router.delete("/:id", deleteStudent);

export default router;
