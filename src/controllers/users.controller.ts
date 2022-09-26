import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import generateToken from '../helpers/generateToken';
import UserSevice from '../services/users.service';

export default class UserController {
  constructor(private UsersService = new UserSevice()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    await this.UsersService.create(user);
    const token = generateToken(user);
    
    res.status(StatusCodes.CREATED).json(token);
  };
}