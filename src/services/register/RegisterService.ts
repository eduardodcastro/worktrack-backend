import prismaClient from "../../prisma";

interface UserRegister {
    id_user: string;
    id_employer: string;
}

class RegisterService {
    async execute({ id_user, id_employer }: UserRegister) {

        const employerAlreadyExists = await prismaClient.user.findFirst({
            where: {
                idhash: id_employer
            }
        })

        if(!employerAlreadyExists) {
            throw new Error("Employer does not exist")
        }

        const register = await prismaClient.workRegister.create({
            data: {
                id_user: id_user,
                id_employer: id_employer,
            },
            select: {
                id: true,
                id_user: true,
                register: true,
                id_employer: true
            }
        })

        return register;
    } 
}

export { RegisterService }