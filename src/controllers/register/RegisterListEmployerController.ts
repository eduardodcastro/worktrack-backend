import { Request, Response } from "express";
import { RegisterListEmployerService } from "../../services/register/RegisterListEmployerService";

class RegisterListEmployerController {
    async handle(req:Request, res:Response) {

        const id_employer = req.query.id_employer as string;
        const registerListEmployerService = new RegisterListEmployerService();
        
        const user = await registerListEmployerService.execute({id_employer});

        return res.json(user);
    }
}

export { RegisterListEmployerController }
