import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RegisterController } from "./controllers/register/RegisterController";
import { ListUserEmployerController } from "./controllers/user/ListUserEmployerController";
import { RegisterListEmployeeController } from "./controllers/register/RegisterListEmployeeController";
import { RegisterListEmployerController } from "./controllers/register/RegisterListEmployerController";
import { RegisterLastRecordEmployeeController } from "./controllers/register/RegisterLastRecordEmployeeController";
import { RegisterLastTwoRecordEmployeeController } from "./controllers/register/RegisterLastTwoRecordEmployeeController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

router.post('/register', isAuthenticated, new RegisterController().handle)

router.get('/user-employer', isAuthenticated, new ListUserEmployerController().handle)

router.get('/register-list-employee', isAuthenticated, new RegisterListEmployeeController().handle)

router.get('/register-list-employer', isAuthenticated, new RegisterListEmployerController().handle)

router.get('/register-last-record-employee', isAuthenticated, new RegisterLastRecordEmployeeController().handle)

router.get('/register-last-two-record-employee', isAuthenticated, new RegisterLastTwoRecordEmployeeController().handle)

export { router };
