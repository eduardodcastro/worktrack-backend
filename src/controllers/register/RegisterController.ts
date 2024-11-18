import { Request, Response, response } from "express";
import { RegisterService } from "../../services/register/RegisterService";

class RegisterController {
    async handle(req: Request, res: Response) {
        const { id_user, id_employer } = req.body;

        const registerService = new RegisterService();

        const user = await registerService.execute({
            id_user,
            id_employer
        });

        return res.json(user);
    }
}

export { RegisterController }