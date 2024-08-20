import { Router } from "express";
import {
  createCourseStatus,
  getCourseStatuses,
  getCourseStatusById,
  updateCourseStatus,
  deleteCourseStatus,
} from "../controllers/course_status.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: CourseStatus
 *   description: API for course status management
 */

/**
 * @swagger
 * /course-status:
 *   get:
 *     summary: Gets the list of all course statuses
 *     tags: [CourseStatus]
 *     responses:
 *       200:
 *         description: List of course statuses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   status:
 *                     type: string
 *                   deleted:
 *                     type: boolean
 */
router.get("/", getCourseStatuses);

/**
 * @swagger
 * /course-status:
 *   post:
 *     summary: Create a new course status
 *     tags: [CourseStatus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *               created_by:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Course status created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 status:
 *                   type: string
 *                 created_by:
 *                   type: integer
 */
router.post("/", createCourseStatus);

/**
 * @swagger
 * /course-status/{id}:
 *   get:
 *     summary: Get a course status by ID
 *     tags: [CourseStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Course Status ID
 *     responses:
 *       200:
 *         description: Course status found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 status:
 *                   type: string
 *                 deleted:
 *                   type: boolean
 *       404:
 *         description: Course status not found
 */
router.get("/:id", getCourseStatusById);

/**
 * @swagger
 * /course-status/{id}:
 *   put:
 *     summary: Update an existing course status
 *     tags: [CourseStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Course Status ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *               updated_by:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Course status successfully updated
 */
router.put("/:id", updateCourseStatus);

/**
 * @swagger
 * /course-status/{id}:
 *   delete:
 *     summary: Delete (soft delete) a course status
 *     tags: [CourseStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Course Status ID
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
 *         description: Course status successfully deleted
 */
router.delete("/:id", deleteCourseStatus);

export default router;
