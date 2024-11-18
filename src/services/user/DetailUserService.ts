import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        const roleUser = await prismaClient.roleUser.findFirst({
            where: {
                id_user: user.id
            }
        })

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            idhash: user.idhash,
            role: roleUser.role,
        }
    }
}

export { DetailUserService }