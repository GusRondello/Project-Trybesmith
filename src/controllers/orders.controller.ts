import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { UserAuthRequest } from '../interfaces/user.interface';
import OrderService from '../services/orders.service';

export default class OrderController {
  constructor(private OrdersService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const oreders = await this.OrdersService.getAll();
    res.status(StatusCodes.OK).json(oreders);
  };

  public create = async (req: UserAuthRequest, res: Response): Promise<Response> => {
    const { productsIds } = req.body;
    if (!req.userInfo) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' });
    }

    const result = await this.OrdersService.create(req.userInfo, productsIds);

    return res.status(StatusCodes.CREATED).json(result);
  };
}