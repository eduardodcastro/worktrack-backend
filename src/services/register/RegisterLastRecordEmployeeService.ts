import prismaClient from "../../prisma";

interface EmployeeRegister {
  id_employee: string;
}

class RegisterLastRecordEmployeeService {
  async execute({ id_employee }: EmployeeRegister) {
    const registerData = await prismaClient.workRegister.findMany({
      relationLoadStrategy: "join", // or "query"
      where: {
        id_user: id_employee,
      },
      orderBy: [
        {
          register: "desc",
        },
      ],
      take: 1,
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    return registerData;
  }
}

export { RegisterLastRecordEmployeeService };
