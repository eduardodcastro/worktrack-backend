import { Request, Response } from "express";
import { RegisterLastTwoRecordEmployeeService } from "../../services/register/RegisterLastTwoRecordEmployeeService";

class RegisterLastTwoRecordEmployeeController {
    async handle(req:Request, res:Response) {

        const date_employee = req.query.date_employee as string;
        const id_employee = req.query.id_employee as string;
        const id_employer = req.query.id_employer as string;

        const registerLastTwoRecordEmployeeService = new RegisterLastTwoRecordEmployeeService();
        
        const user = await registerLastTwoRecordEmployeeService.execute({date_employee, id_employee, id_employer});

        return res.json(user);
    }
}

export { RegisterLastTwoRecordEmployeeController }
