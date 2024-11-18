import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password}: AuthRequest) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user) {
            throw new Error("User/password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("User/password incorrect")
        }

        const roleUser = await prismaClient.roleUser.findFirst({
            where: {
                id_user: user.id
            }
        })

        const token = sign({
            name: user.name,
            email: user.email,
            idhash: user.idhash,
            role: roleUser?.role
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: '180d'
        }
        )

        return { 
            id: user.id,
            name: user.name,
            email: user.email,
            idhash: user.idhash,
            role: roleUser.role,
            token: token
        }
    }
}

export { AuthUserService }