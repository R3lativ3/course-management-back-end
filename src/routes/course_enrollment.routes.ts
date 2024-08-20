import { Router } from "express";
import {
  enrollStudent,
  getEnrollments,
  deleteEnrollment,
} from "../controllers/course_enrollment.controller";

const router = Router();

router.post("/", enrollStudent);
router.get("/", getEnrollments);
router.delete("/:id", deleteEnrollment);

export default router;
