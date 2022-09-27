import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validateUser from '../middlewares/users.middleware';

const userRouter = Router();

const usersController = new UserController();

userRouter.post('/', validateUser, usersController.create);

export default userRouter;