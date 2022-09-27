import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import UserSevice from '../services/users.service';

export default class UserController {
  constructor(private UsersService = new UserSevice()) {}

  public findUser = async (req: Request, res: Response): Promise<Response> => {
    const { username, passowrd } = req.body;

    const token = await this.UsersService.findUser(username, passowrd);

    if (!token) {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }
    
    return res.status(StatusCodes.OK).json({ token });
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const user = req.body;

    const token = await this.UsersService.create(user);
    
    return res.status(StatusCodes.CREATED).json({ token });
  };
}