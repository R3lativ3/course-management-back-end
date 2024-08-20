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
 *   description: API para la gestión de inscripciones de cursos
 */

/**
 * @swagger
 * /course_enrollment:
 *   post:
 *     summary: Inscribir un estudiante en un curso
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
 *                 description: ID del curso y profesor relacionado
 *               student_id:
 *                 type: integer
 *                 description: ID del estudiante
 *               course_status_id:
 *                 type: integer
 *                 description: Estado del curso (opcional)
 *     responses:
 *       200:
 *         description: Estudiante inscrito exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Inscripción exitosa"
 */
router.post("/", enrollStudent);

/**
 * @swagger
 * /course_enrollment:
 *   get:
 *     summary: Obtener todas las inscripciones
 *     tags: [CourseEnrollment]
 *     responses:
 *       200:
 *         description: Lista de todas las inscripciones
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
 *     summary: Eliminar una inscripción por ID
 *     tags: [CourseEnrollment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la inscripción
 *     responses:
 *       200:
 *         description: Inscripción eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Inscripción eliminada"
 */
router.delete("/:id", deleteEnrollment);

export default router;