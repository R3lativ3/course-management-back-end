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
 *   description: API para la gestión de estudiante
 */

/**
 * @swagger
 * /student:
 *   get:
 *     summary: Obtiene la lista de todos los estudiantes
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: Lista de estudiantes
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
 *     summary: Crea un nuevo estudiante
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
 *               phone_number:
 *                 type: string
 *     responses:
 *       201:
 *         description: Estudiante creado exitosamente
 */
router.post("/", createStudent);

/**
 * @swagger
 * /student/{id}:
 *   put:
 *     summary: Actualiza un estudiante existente
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estudiante
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
 *         description: Estudiante actualizado exitosamente
 */
router.put("/:id", updateStudent);

/**
 * @swagger
 * /student/{id}:
 *   delete:
 *     summary: Elimina un estudiante
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estudiante
 *     responses:
 *       204:
 *         description: Estudiante eliminado exitosamente
 */
router.delete("/:id", deleteStudent);

export default router;
