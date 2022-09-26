import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import OrderService from '../services/orders.service';

export default class OrderController {
  constructor(private OrdersService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const oreders = await this.OrdersService.getAll();
    res.status(StatusCodes.OK).json(oreders);
  };
}