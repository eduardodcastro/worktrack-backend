import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

enum UserRole {
    EMPLOYER = "EMPLOYER",
    EMPLOYEE = "EMPLOYEE"
}

interface UserRequest {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}

class CreateUserService {
    async execute({ name, email, password, role }: UserRequest) {

        if(!email) {
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExists) {
            throw new Error("User already exists")
        }

        const idhashConcat = email;

        const passwordHash = await hash(password, 8)
        const idhashToConvert = await hash(idhashConcat, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                idhash: idhashToConvert
            },
            select: {
                id: true,
                name: true,
                email: true,
                idhash: true
            }
        })

        const user_role = await prismaClient.roleUser.create({
            data: {
                role: role,
                id_user: user.id
            }
        })

        return { user, user_role };
    } 
}

export { CreateUserService }