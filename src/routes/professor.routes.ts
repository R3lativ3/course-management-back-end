import { Router } from "express";
import {
  createProfessor,
  getProfessors,
  getProfessorById,
  updateProfessor,
  deleteProfessor,
} from "../controllers/professor.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Professor
 *   description: API for teacher management
 */

/**
 * @swagger
 * /professor:
 *   get:
 *     summary: Get the list of all teachers
 *     tags: [Professor]
 *     responses:
 *       200:
 *         description: List of teachers
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
 *                   last_name:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get("/", getProfessors);

/**
 * @swagger
 * /professor/{id}:
 *   get:
 *     summary: Get a professor by ID
 *     tags: [Professor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Professor ID
 *     responses:
 *       200:
 *         description: A professor object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 last_name:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Professor not found
 */
router.get("/:id", getProfessorById);

/**
 * @swagger
 * /professor:
 *   post:
 *     summary: Create a new teacher
 *     tags: [Professor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Professor created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 last_name:
 *                   type: string
 *                 email:
 *                   type: string
 */
router.post("/", createProfessor);

/**
 * @swagger
 * /professor/{id}:
 *   put:
 *     summary: Update an existing teacher
 *     tags: [Professor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Teacher ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Teacher successfully updated
 */
router.put("/:id", updateProfessor);

/**
 * @swagger
 * /professor/{id}:
 *   delete:
 *     summary: Soft delete a teacher by ID
 *     tags: [Professor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Teacher ID
 *     responses:
 *       204:
 *         description: Professor successfully removed
 */
router.delete("/:id", deleteProfessor);

export default router;