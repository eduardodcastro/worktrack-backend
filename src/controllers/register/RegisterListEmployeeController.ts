import { Request, Response } from "express";
import { RegisterListEmployeeService } from "../../services/register/RegisterListEmployeeService";

class RegisterListEmployeeController {
    async handle(req:Request, res:Response) {

        const id_employee = req.query.id_employee as string;
        const id_employer = req.query.id_employer as string;

        const registerListEmployeeService = new RegisterListEmployeeService();
        
        const user = await registerListEmployeeService.execute({id_employee, id_employer});

        return res.json(user);
    }
}

export { RegisterListEmployeeController }
