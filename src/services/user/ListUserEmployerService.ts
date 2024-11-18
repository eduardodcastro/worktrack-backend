import prismaClient from "../../prisma";

class ListUserEmployerService {
    async execute(user_idhash: string) {

        const user = await prismaClient.user.findFirst({
            where: {
                idhash: user_idhash
            },
            select: {
                name: true,
                idhash: true,
            }
        })
        return user
    }
}

export { ListUserEmployerService }