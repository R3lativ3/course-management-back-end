import { Request, Response } from "express";
import * as services from "../services";

const serviceMap: Record<string, any> = {
  course: {
    getAll: services.getCourses,
    getById: services.getCourseById,
    create: services.createCourse,
    update: services.updateCourse,
    delete: services.deleteCourse,
  },
  student: {
    getAll: services.getStudents,
    getById: services.getStudentById,
    create: services.createStudent,
    update: services.updateStudent,
    delete: services.deleteStudent,
  },
  professor: {
    getAll: services.getProfessors,
    getById: services.getProfessorById,
    create: services.createProfessor,
    update: services.updateProfessor,
    delete: services.deleteProfessor,
  },
  course_status: {
    getAll: services.getCourseStatuses,
    getById: services.getCourseStatusById,
    create: services.createCourseStatus,
    update: services.updateCourseStatus,
    delete: services.deleteCourseStatus,
  },
  course_enrollment: {
    getAll: services.getEnrollments,
    create: services.enrollStudent,
    delete: services.deleteEnrollment,
  },
  course_professor: {
    getAll: services.getCourseProfessors,
    getById: services.getCourseProfessorById,
    update: services.updateCourseProfessor,
    create: services.createCourseProfessor,
    delete: services.deleteCourseProfessor,
  },
};

export const handleEntityRequest = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { source, id } = req.params;
  const { body } = req;
  try {
    const entityService = serviceMap[source];
    if (!entityService) {
      return res.status(400).json({ message: "Invalid source type" });
    }
    let result;
    switch (req.method) {
      case "GET":
        result = id
          ? await entityService.getById(id)
          : await entityService.getAll();
        break;
      case "POST":
        result = await entityService.create(body);
        break;
      case "PUT":
        if (!id)
          return res.status(400).json({ message: "ID is required for update" });
        result = await entityService.update(id, body);
        break;
      case "DELETE":
        if (!id)
          return res.status(400).json({ message: "ID is required for delete" });
        result = await entityService.delete(id);
        break;
      default:
        return res.status(405).json({ message: "Method not allowed" });
    }
    if (!result) {
      return res.status(404).json({ message: `${source} not found` });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error processing request", error: error });
  }
};
