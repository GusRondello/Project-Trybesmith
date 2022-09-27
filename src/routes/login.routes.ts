import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validateLogin from '../middlewares/login.middleware';

const loginRouter = Router();

const userController = new UserController();

loginRouter.post('/', validateLogin, userController.findUser);

export default loginRouter;