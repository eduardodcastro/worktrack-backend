import { Request, Response } from "express";
import { ListUserEmployerService } from "../../services/user/ListUserEmployerService";

class ListUserEmployerController {
    async handle(req:Request, res:Response) {

        const user_idhash = req.query.user_idhash as string;
        const listUserEmployerService = new ListUserEmployerService();
        
        const user = await listUserEmployerService.execute(user_idhash);

        return res.json(user);
    }
}

export { ListUserEmployerController }
