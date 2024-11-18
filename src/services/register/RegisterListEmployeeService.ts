import prismaClient from "../../prisma";

interface EmployeeRegister {
    id_employee: string;
    id_employer: string;
}

class RegisterListEmployeeService {
    async execute({ id_employee, id_employer }: EmployeeRegister) {

        const register = await prismaClient.workRegister.findMany({
            relationLoadStrategy: "join", // or "query"
            where: {
                id_user: id_employee,
                id_employer: id_employer,
            },
            // include: {
            //     user: true,
            // },

            include: {
                user: {
                    select: {
                        name: true,
                      },
                },
            },

            // select: {
            //     id: true,
            //     register: true,
            //     id_employer: true
            // }
        })

        return register;
    } 
}

export { RegisterListEmployeeService }