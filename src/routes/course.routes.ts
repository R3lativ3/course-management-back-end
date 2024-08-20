import { Router } from "express";
import {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Course
 *   description: API para la gestión de cursos
 */

/**
 * @swagger
 * /course:
 *   get:
 *     summary: Obtiene la lista de todos los cursos
 *     tags: [Course]
 *     responses:
 *       200:
 *         description: Lista de cursos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                   capacity:
 *                     type: integer
 *                   credits:
 *                     type: integer
 */
router.get("/", getCourses);

/**
 * @swagger
 * /course:
 *   post:
 *     summary: Crea un nuevo curso
 *     tags: [Course]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               capacity:
 *                 type: integer
 *               credits:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Curso creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *                 capacity:
 *                   type: integer
 *                 credits:
 *                   type: integer
 */
router.post("/", createCourse);

/**
 * @swagger
 * /course/{id}:
 *   put:
 *     summary: Actualiza un curso existente
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               capacity:
 *                 type: integer
 *               credits:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Curso actualizado exitosamente
 */
router.put("/:id", updateCourse);

/**
 * @swagger
 * /course/{id}:
 *   delete:
 *     summary: Elimina un curso
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del curso
 *     responses:
 *       204:
 *         description: Curso eliminado exitosamente
 */
router.delete("/:id", deleteCourse);

export default router;
