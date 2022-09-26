import { Router } from 'express';
import UserController from '../controllers/users.controller';

const userRouter = Router();

const usersController = new UserController();

userRouter.post('/users', usersController.create);

export default userRouter;