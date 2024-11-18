import { Request, Response } from "express";
import { RegisterLastRecordEmployeeService } from "../../services/register/RegisterLastRecordEmployeeService";

class RegisterLastRecordEmployeeController {
    async handle(req:Request, res:Response) {

        const id_employee = req.query.id_employee as string;
        const registerLastRecordEmployeeService = new RegisterLastRecordEmployeeService();
        
        const user = await registerLastRecordEmployeeService.execute({id_employee});

        return res.json(user);
    }
}

export { RegisterLastRecordEmployeeController }
