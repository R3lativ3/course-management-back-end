import Professor from "../models/professor.model";

interface ProfessorCreationAttributes {
  name: string;
  last_name: string;
  email: string;
  deleted: boolean;
}

export const createProfessor = async (
  professorData: ProfessorCreationAttributes
): Promise<Professor> => {
  try {
    return await Professor.create(professorData);
  } catch (error) {
    throw new Error("Error creating teacher: " + (error as Error).message);
  }
};

export const getProfessors = async (): Promise<Professor[]> => {
  try {
    return await Professor.findAll({
      where: {
        deleted: false,
      },
    });
  } catch (error) {
    throw new Error("Error getting teachers: " + (error as Error).message);
  }
};

export const getProfessorById = async (
  professorId: string
): Promise<Professor | null> => {
  try {
    const professor = await Professor.findOne({
      where: {
        id: professorId,
        deleted: false,
      },
    });
    if (!professor) {
      throw new Error("Teacher not found or deleted");
    }
    return professor;
  } catch (error) {
    throw new Error("Error getting teacher: " + (error as Error).message);
  }
};

export const updateProfessor = async (
  professorId: string,
  professorData: ProfessorCreationAttributes
): Promise<Professor | null> => {
  const professor = await Professor.findOne({
    where: {
      id: professorId,
      deleted: false,
    },
  });
  if (!professor) throw new Error("Teacher not found or deleted");
  try {
    await professor.update(professorData);
    return professor;
  } catch (error) {
    throw new Error("Error updating teacher: " + (error as Error).message);
  }
};

export const deleteProfessor = async (professorId: string): Promise<void> => {
  const professor = await Professor.findByPk(professorId);
  if (!professor) throw new Error("Teacher not found");
  try {
    professor.deleted = true;
    await professor.save();
  } catch (error) {
    throw new Error("Error deleting teacher: " + (error as Error).message);
  }
};
