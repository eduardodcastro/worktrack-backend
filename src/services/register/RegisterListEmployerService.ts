import prismaClient from "../../prisma";

interface UserRegister {
    id_employer: string;
}

class RegisterListEmployerService {
    async execute({ id_employer }: UserRegister) {

        const register = await prismaClient.workRegister.findMany({
            relationLoadStrategy: "join", // or "query"
            where: {
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

export { RegisterListEmployerService }