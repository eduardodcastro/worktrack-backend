import prismaClient from "../../prisma";

interface EmployeeDateRegister {
  date_employee: string;
  id_employee: string;
  id_employer: string;
}

class RegisterLastTwoRecordEmployeeService {
  async execute({ date_employee, id_employee, id_employer }: EmployeeDateRegister) {
    const registerData = await prismaClient.workRegister.findMany({
      relationLoadStrategy: "join", // or "query"
      where: {
        id_user: id_employee,
        register: {
            gte: new Date(date_employee),
        },
        id_employer: id_employer,
      },
      orderBy: [
        {
        //   register: "desc",
        },
      ],
      take: 2,
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

export { RegisterLastTwoRecordEmployeeService };
